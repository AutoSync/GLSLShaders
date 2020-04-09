/********************
2020 Erick Andrade - Original Code ->  https://thebookofshaders.com/
********************/

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 uv, float pct)
{
    return smoothstep(pct-0.01, pct, uv.y) - 
smoothstep(pct, pct+0.01, uv.y);
}

void main()
{

    vec2 uv = gl_FragCoord.xy/u_resolution;
    float tm = u_time * 0.25;
    vec3 lineColor = vec3(sin(tm), 0.2, cos(tm));
    float y;

    /************************ FIXED VALUES ******************/
    // y = smoothstep(0.2,0.5,uv.x) - smoothstep(0.5,0.8,uv.x); // Curve Center
    // the values of the last parameter can vary between 0.5 and 2.0 even more
    //                         *0.5*
    // y = 1.0 - pow(abs(uv.x),0.5); 
    // y = pow(cos(PI * uv.x / 2.0),0.5);
    // y = 1.0 - pow(abs(sin(PI * uv.x / 2.0 )),0.5);
    // y = pow(min(cos(PI * uv.x / 2.0), 1.0 - abs(uv.x)),0.5);
    //y = 1.0 - pow(max(0.0, abs(uv.x) * 2.0 - 1.0), 5.0);

    /************************ ANIMATED VALUES ****************/
    // y = smoothstep(0.0,sin(tm), uv.x);
    //the values of the last parameter can vary between 0.5 and 2.0 even more
    //                                  *0.75*
    // y = cos(uv.x) * sin(uv.y) / sin(tm) * 0.75;
    // y = 1.0 - pow(abs(uv.x),sin(tm)); 
    // y = pow(cos(PI * uv.x / 2.0),sin(tm));
    // y = 1.0 - pow(abs(sin(PI * uv.x / 2.0 )),abs(sin(tm)));
    // y = pow(min(cos(PI * uv.x / 2.0), 1.0 - abs(uv.x)),abs(cos(tm)));
    //y = 1.0 - pow(max(0.0, abs(uv.x) * 2.0 - 1.0), abs(sin(tm))*5.0);

    vec3 color = vec3(y);
    
    float line = plot(uv, y);

    color = (1.0 - line)*color+line*lineColor;
    gl_FragColor = vec4(color,1.0);

}