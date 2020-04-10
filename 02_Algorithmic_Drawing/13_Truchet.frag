/********************
2020 Erick Andrade
Original Code ->  https://thebookofshaders.com/
// Author @patriciogv ( patriciogonzalezvivo.com ) - 2015
********************/
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846

uniform vec2 u_resolution;
uniform float u_time;

vec2 rotate2D (vec2 _st, float _angle) {
    _st -= 0.5;
    _st =  mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle)) * _st;
    _st += 0.5;
    return _st;
}

vec2 tile (vec2 _st, float _zoom) {
    _st *= _zoom;
    return fract(_st);
}

vec2 rotateTilePattern(vec2 _uv){

    //  Scale the coordinate system by 2x2
    _uv *= 2.0;

    //  Give each cell an index number
    //  according to its position
    float index = 0.0;
    index += step(1., mod(_uv.x,2.0));
    index += step(1., mod(_uv.y,2.0))*2.0;

    //      |
    //  2   |   3
    //      |
    //--------------
    //      |
    //  0   |   1
    //      |

    // Make each cell between 0.0 - 1.0
    _uv = fract(_uv);

    // Rotate each cell according to the index
    if(index == 1.0){
        //  Rotate cell 1 by 90 degrees
        _uv = rotate2D(_uv,PI*0.5);
    } else if(index == 2.0){
        //  Rotate cell 2 by -90 degrees
        _uv = rotate2D(_uv,PI*-0.5);
    } else if(index == 3.0){
        //  Rotate cell 3 by 180 degrees
        _uv = rotate2D(_uv,PI);
    }

    return _uv;
}

void main()
{   
    vec2 uv = gl_FragCoord.xy/ u_resolution.xy;
    float t = u_time / 1.0;
    vec3 color = vec3(1.0);

    uv = tile(uv,3.0);
    uv = rotateTilePattern(uv);

    // Make more interesting combinations
    // uv = tile(uv,2.0);
    // uv = rotate2D(uv,-PI*u_time*0.25);
    // uv = rotateTilePattern(uv*2.);
     uv = rotate2D(uv,PI*u_time*0.25);

    // step(uv.x, uv.y) just makes a b&w triangles
    // but you can use whatever design you want.
    
    vec3 pattern = vec3(step(uv.x, uv.y));
    pattern.x = cos(t / 1.8);
    pattern.y = pattern.y - sin(t / 1.2);
    pattern.z = pattern.z -sin(t / 3.2);
    color = pattern *color;

    gl_FragColor = vec4(color, 1.0);

}