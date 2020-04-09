/********************
2020 Erick Andrade - Original Code ->  https://thebookofshaders.com/
********************/

#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float oneMinus(float value)
{
    return 1.0- value;
}
float rect(float x, float y,vec2 uv)
{
    // Each result will return 1.0 (white) or 0.0 (black).
    vec2 marginLeft = step(vec2(x),uv);
    float ml = marginLeft.x * marginLeft.y;

    vec2 marginRight = step(vec2(y),1.0-uv);
    float mr = marginRight.x * marginRight.y;

    return (ml * mr);
}

void main()
{
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    vec2 m = u_mouse.xy; //get mouse values
    float vt = u_time / 1.0;
    vec2 size = vec2(0.1);

    //size = vec2(oneMinus(0.9)); // oneMinus 0.9 == 0.1
    size = vec2(m.x / m.y / 7.25); // define size by mouse movement
    //size = vec2(m.x / m.y * uv.x / 5.21); // Door effect Rigth
    //size = vec2(m.x / m.y * uv.y / 5.21); // Door effect up
    //size = vec2(m.x - m.y * uv.y - 1.0 / 5.21); // Fade up
    //size = vec2(m.x - m.y / uv.y - 1.0 / 5.21); // Fade down


    //color = vec3(abs(sin(vt)) * ml * mr); //Animated fade
    color = vec3(rect(size.x, size.y, uv));

    gl_FragColor = vec4(color,1.0);
}