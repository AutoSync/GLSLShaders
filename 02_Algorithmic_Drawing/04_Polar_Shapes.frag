/********************
2020 Erick Andrade - Original Code ->  https://thebookofshaders.com/
********************/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float shape(float shape, float radius)
{
    return smoothstep(shape, shape + 0.02, radius);
}

float deltaRot(float speed)
{
    vec2 uv = gl_FragCoord.xy /u_resolution.xy;
    vec2 pos = vec2(0.5) - uv;
    float radius = length(pos) * 3.0;
    float angle = atan(pos.x, pos.y);

    return angle + u_time * speed;
}

void main()
{   
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);
    float t = u_time;

    vec2 pos = vec2(0.5) - uv;
    float radius = length(pos) * 3.0;
    float angle = atan(pos.x, pos.y);

    float form;

    //form = cos(angle * 3.0);
    //form = cos(deltaRot(2.0)) * sin(angle*8.0); // Rotation
    //form = abs(cos(angle* 3.));
    //form = abs(cos(angle*12.0) * sin(angle * 3.0)) * 0.8 + 1.0;
    //form = smoothstep(-0.5, 1.0, cos(angle * 10.0)) * 0.2 + 0.5;
    form = smoothstep(-0.5, 1.0, cos(deltaRot(1.2)  * 6.0)) * 0.2 + 0.5;
    
    //Render Form
    color = vec3(1.0 - shape(form, radius));

    gl_FragColor = vec4(color, 1.0);
}