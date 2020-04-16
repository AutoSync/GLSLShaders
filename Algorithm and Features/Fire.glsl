#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

/*

Functions

*/

void main()
{   
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 color = vec3(1.0);


    gl_FragColor = vec4( 1.0);
}