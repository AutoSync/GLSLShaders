/* #ifdef GL_ES <- Tell openGl that it's an OpenGL ES shader
*  presion medium float; <-The GPU says how accurate the lowp (low precision), 
*  mediump (medium precision) highp (high precision) float should be.
*  #endif <- End of definition statement
*****************************************
2020 Erick Andrade - Original Code ->  https://thebookofshaders.com/
********************/

#ifdef GL_ES                 
precision mediump float;                           
#endif                      


void main()
{
    vec3 color = vec3(0.5,0.5,1.0);
    //First Shader filling the screen with a purple color.
    gl_FragColor = vec4(color,1.0);
}