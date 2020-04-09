/********************
2020 Erick Andrade - Original Code ->  https://thebookofshaders.com/
********************/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float oneMinus(float value)
{
    return 1.0 - value;
}
void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 m = u_mouse;
    float t = u_time / 3.0;
    float point = 0.0;
    vec3 color = vec3(0.5);

    point = distance(uv, vec2(0.5));// Default center black, border white
    //point = oneMinus(distance(uv, vec2(0.5))); // invert center white
    
    /* Outers
    vec2 tc = vec2(0.5)-uv; // To center
    point = sqrt(tc.x*tc.x+tc.y*tc.y);
    */

    // color = vec3(point); // Default
    // color = vec3(step(point, 0.2));
    // color = vec3(smoothstep(0.3,0.5,point));
    // color = vec3(smoothstep(uv.x, uv.y, point) - smoothstep(0.5, 0.5, point));
    // color = vec3(smoothstep(uv.x, uv.y, point) + smoothstep(0.5, 0.5, point));
    // color = vec3(smoothstep(uv.x, uv.y, point) / smoothstep(0.5, 0.5, point));
    // color = vec3(smoothstep(uv.x, uv.y, point) * smoothstep(0.5, 0.5, point));
    color = vec3(smoothstep(uv.x * uv.y  + sin(t), point, sin(t / 1.25)) * 
    abs(sin(t + uv.x - uv.y)) * 
    smoothstep(uv.y / uv.x - cos(t), point, cos(t / 1.32)));

    vec3 newcolor = vec3( sin(t),sin(t) + uv.y, cos(t) + uv.x) * tan(color);
    
    gl_FragColor = vec4(newcolor, 1.0);
}