/********************
2020 Erick Andrade - Original Code ->  https://thebookofshaders.com/
********************/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.x *= u_resolution.x / u_resolution.y;
    vec3 color = vec3(1.0);
    float dist = 0.0;

    uv = uv * (2.0) - (1.0);

    dist = length(abs(uv) - 0.3);

    color = vec3(fract(dist * 10.0));
    //color = vec3(smoothstep(0.3,0.4,dist) - smoothstep(0.6,0.5,dist));

    gl_FragColor = vec4(color, 1.0);
}