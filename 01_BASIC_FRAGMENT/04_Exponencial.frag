#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct)
{
    return smoothstep(pct-0.01, pct, st.y) -
            smoothstep(pct, pct+0.01, st.y);
}

void main()
{
    vec2 st = gl_FragCoord.xy/u_resolution*1.0;
    vec2 ms = gl_FragCoord.xy/u_mouse;
    float vel = u_time / 8.0;
    float csin = abs(tan(u_time));
    float y;
    
    //Fixed power standard
    //f = pow(st.x, 2.5);

    //Using Sine
    //y = pow(st.x, abs(sin(u_time)));

    //Using tangent * (vel)velocity animation
    y = pow(st.x, abs(tan(vel)));

    //Using Mouse Coord
    //y = pow(ms.x, 1.0);

    //Using Coord + Mouse
    //y = pow(st.x, ms.x);

    //Using Mouse + tangemt
    //y = pow(ms.x, abs(tan(vel)));

    //y = smoothstep(0.1,1.0,st.x);
    
    vec3 color = vec3(y);
   // Plot a line
    float pct = plot(st, y);
    
    //Default Line color
    //color = (1.0-pct)*color+pct*vec3(1.0,0.0,1.0);

    //Animated Color Plot
    color = (1.0-pct)*color+pct*vec3(csin/1.14, csin/2.0, csin/3.2);
    
    //Static Color
    gl_FragColor = vec4(color, 1.0);

}

    // Functions
    //y = fract(x); // return only the fraction part of a number
    //y = ceil(x);  // nearest integer that is greater than or equal to x
    //y = floor(x); // nearest integer less than or equal to x
    //y = sign(x);  // extract the sign of x
    //y = abs(x);   // return the absolute value of x
    //y = clamp(x,0.0,1.0); // constrain x to lie between 0.0 and 1.0
    //y = min(0.0,x);   // return the lesser of x and 0.0
    //y = max(0.0,x);   // return the greater of x and 0.0 