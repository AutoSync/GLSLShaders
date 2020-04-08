#ifdef GL_ES                 //Tell openGl that it's an OpenGL ES shader
precision mediump float;    //The GPU says how accurate the lowp (low precision), 
                            //mediump (medium precision) highp (high precision) float should be.
#endif                      //End of definition statement

void main()
{
    //First Shader filling the screen with a purple color.
    gl_FragColor = vec4(0.5,0.5,1.0,1.0);
}