/********************
2020 Erick Andrade
Original Code ->  https://thebookofshaders.com/
// Author @patriciogv ( patriciogonzalezvivo.com ) - 2015
********************/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.14159265358979323846

vec2 rotate2D(vec2 _uv, float _angle){
    _uv -= 0.5;
    _uv =  mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle)) * _uv;
    _uv += 0.5;
    return _uv;
}

vec2 tileuv(vec2 _uv, vec2 _size)
{
    _uv *= _size;
    return fract(_uv);
}

float box(vec2 _uv, vec2 _size, float _smoothEdges){
    _size = vec2(0.5)-_size*0.5;
    vec2 aa = vec2(_smoothEdges*0.5);
    vec2 uv = smoothstep(_size,_size+aa,_uv);
    uv *= smoothstep(_size,_size+aa,vec2(1.0)-_uv);
    return uv.x*uv.y;
}

void main()
{   
    vec2 uv = gl_FragCoord.xy/ u_resolution.xy;
    float t = u_time / 1.0;
    vec3 color = vec3(1.0);

    float angle = PI * 0.25;
    vec2 tile = vec2(2.0);

    uv = tileuv(uv, tile);

    uv = rotate2D(uv, angle); // Manual Rotation
    //uv = rotate2D(uv, PI * sin(t)); // Animation Rotation
    //uv = rotate2D(uv, PI * sin(t) * uv.x); // Sin Time Multiply by UV.X
    //uv = rotate2D(uv, PI * sin(t) * uv.y); // Sin Time Multiply by UV.Y
    //uv = rotate2D(uv, PI * cos(t) + uv.x); // Cos Time Multiply by UV.X ---
    

    vec3 pattern = vec3(box(uv, vec2(0.65), 0.01));
    color = pattern;
    //color = vec3(uv.x, uv.y, 1.0);
    //color = mix(color, color * pattern, sin(t));

    gl_FragColor = vec4(color, 1.0);

}