/********************
2020 Erick Andrade - 
Original Code ->  https://thebookofshaders.com/ +
Author @patriciogv ( patriciogonzalezvivo.com ) - 2015

********************/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

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

float deltaRot(float speed)
{
    vec2 uv = gl_FragCoord.xy /u_resolution.xy;
    vec2 pos = vec2(0.5) - uv;
    float radius = length(pos) * 3.0;
    float angle = atan(pos.x, pos.y);

    return angle + u_time * speed;
}

void main()
{
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    float s = 0.5;

    vec2 translate = vec2(cos(u_time * s), sin(u_time * s));
    uv += translate*0.35;


    vec3 shape =  vec3(cross(uv, 0.335));
    
    color += shape;
    //color = vec3(uv.x,uv.y, 0.0) + shape; // view uv movement

    gl_FragColor = vec4(color, 1.0);

}