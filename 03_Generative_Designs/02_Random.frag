#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random(vec2 uv)
{
    return fract(sin(dot(uv.xy, 
    vec2(12.009, 78.300)))*
    43758.5453123);
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time / 1.0;
    vec3 color = vec3(1.0);
    
    float rnd = random(uv);

    color = vec3(rnd);

    gl_FragColor = vec4(color, 1.0);
}