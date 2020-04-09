/********************
2020 Erick Andrade - 
Original Code ->  https://thebookofshaders.com/
References -> https://thndl.com/square-shaped-shaders.html
********************/
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14
#define TWO_PI 6.28

uniform vec2 u_resolution;
uniform float u_time;

void main()
{
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(0.0);
    float dist = 0.0;

    // Remap the space to -1. to 1.
    uv = uv *2.0 - 1.0;

    // Number of sides of your shape
    int N = 6;

    float angle = atan(uv.x, uv.y) + PI;
    float radius = TWO_PI/float(N);

    dist = cos(floor(0.5 + angle / radius ) * radius - angle) * length(uv);

    //color = vec3(dist);
    //color = vec3(1.0 - smoothstep(0.4, 0.41, dist));



    gl_FragColor = vec4(color,1.0);
}