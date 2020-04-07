#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time; // <- this uniform represents time per second

void main()
{
    /* Vector 4 represents R.G.B.A ranging from 0.0 to 1.0
    below a sine function for each color channel */

    //sine in the red channel
    //gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
    
    //sine in the green channel
    //gl_FragColor = vec4(0.0,abs(sin(u_time)),0.0,1.0);

    //sine in the blue channel
    //gl_FragColor = vec4(0.0,0.0,abs(sin(u_time)),1.0);
    
    //sine in the alpha channel
    gl_FragColor = vec4(1.0,1.0,1.0,abs(sin(u_time)));

}