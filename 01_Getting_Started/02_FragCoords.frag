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
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 ms = gl_FragCoord.xy/u_mouse;

    //Separate the uv coordinates by dividing them into X, Y
    //gl_FragColor = vec4(st.x,st.y,0.0,1.0);

    //Separate the uv coordinates using the mouse position
    //gl_FragColor = vec4(ms,0.0,1.0);

    /*Separate the uv coordinates using the mouse position, applying 
    the sine function to the coordinate position value*/
    gl_FragColor = vec4(ms,abs(sin(u_time)),1.0);
}