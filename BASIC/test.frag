#ifdef GL_ES
precision mediump float;
#endif

void main()
{
    //First Shader filling the screen with a purple color.
    gl_FragColor = vec4(0.5,0.5,1.0,1.0);
}