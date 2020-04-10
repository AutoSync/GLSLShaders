/********************
2020 Erick Andrade - Original Code ->  https://thebookofshaders.com/
********************/

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.6549, 0.6549, 0.6549);
vec3 colorB = vec3(0.2588, 0.2588, 0.2588);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    float t = u_time / 2.0;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(1.0);

     pct.r = smoothstep(0.0,1.0, abs(sin(t*1.2+uv.x)));
     pct.g = sin(abs(sin(t*0.32+uv.x))*PI);
     pct.b = pow( abs(sin(t*.112+uv.x)),0.5);

    //color = mix(colorA, colorB, pct);
    color = vec3(uv.x + t / 6.0, uv.y, 1.0);

    // Plot transition lines for each channel
    color = mix(color,vec3(1.0,0.0,0.0),plot(uv,pct.r));
    color = mix(color,vec3(0.0,1.0,0.0),plot(uv,pct.g));
    color = mix(color,vec3(0.0,0.0,1.0),plot(uv,pct.b));
    

    gl_FragColor = vec4(color,1.0);
}