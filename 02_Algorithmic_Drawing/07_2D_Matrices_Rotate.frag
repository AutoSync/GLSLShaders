/********************
2020 Erick Andrade - 
Original Code ->  https://thebookofshaders.com/ +
Author @patriciogv ( patriciogonzalezvivo.com ) - 2015
********************/
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

mat2 rotate2D(float _angle)
{
    return mat2(cos(_angle), - sin(_angle),
            sin(_angle), cos(_angle));
}

float box(in vec2 _uv, in vec2 _size)
{
    _size = vec2(0.5) - _size * 0.5;
    vec2 uv = smoothstep(_size, _size + vec2(0.001), _uv);
    uv *= smoothstep(_size, _size+vec2(0.001),vec2(1.0) - _uv);

    return uv.x*uv.y;
}

float cross(in vec2 _uv, float _size)
{
    return box(_uv, vec2(_size, _size/4.0)) +
            box(_uv, vec2(_size/4.0, _size));
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float t = u_time * 1.0;
    vec3 color = vec3(0.0);

    uv -= vec2(0.5);
    uv = rotate2D( sin(t) * PI) * uv;
    uv += vec2(0.5);

    vec3 shapeCross = vec3(cross(uv, 0.4));
    color = shapeCross;

    gl_FragColor = vec4(color, 1.0);
}
