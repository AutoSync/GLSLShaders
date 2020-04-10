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

vec2 brick(vec2 _UV, float _SIZE)
{
    _UV *= _SIZE;
    _UV.x += step(1.0, mod(_UV.y, 2.0) ) * 0.5;

    return fract(_UV);
}

float box(vec2 _UV, vec2 _SIZE)
{
    _SIZE = vec2(0.5) -_SIZE * 0.5; 
    vec2 LUV = smoothstep(_SIZE, _SIZE + vec2(1e-4), _UV);
    LUV *= smoothstep(_SIZE, _SIZE+vec2(1e-4), vec2(1.0) - _UV);

    return LUV.x * LUV.y;

}
/******************* MAIN FUNCTION ******************/
void main()
{   
    vec2 uv = gl_FragCoord.xy/ u_resolution.xy;
    float t = u_time / 1.0;
    vec3 color = vec3(1.0);
    vec2 size = vec2(3.0);

    uv /= vec2(2.25,0.65)/1.5;
    uv = brick(uv, 5.0);
    
    color = vec3(box(uv, vec2(0.95,0.85)));

    gl_FragColor = vec4(color, 1.0);

}