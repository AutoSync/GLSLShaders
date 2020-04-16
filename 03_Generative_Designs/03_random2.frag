#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random(vec2 uv)
{
    return fract(sin(dot(uv.xy, 
    vec2(12.9898, 78.233)))*
    43758.5453123);
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time / 1.0;
    vec3 color = vec3(1.0);
    uv *= 12.0;
    vec2 ipos = floor(uv);
    vec2 fpos = fract(uv);
    vec2 cpos = ceil(uv);



    vec3 a = vec3(random( ipos ));
    vec3 b = vec3(random( fpos ));
    vec3 c = vec3(random( cpos ));

    vec3 color1 = mix(a, b, abs(sin(t / 2.0)));
    color = mix(c, color1, abs(cos(t / 3.0)));

    gl_FragColor = vec4(color, 1.0);
}