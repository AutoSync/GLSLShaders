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
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float vt = u_time / 2.0;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(st.x);

     pct.r = smoothstep(0.0,1.0, abs(sin(vt*1.2+st.x)));
     pct.g = sin(abs(sin(vt*0.32+st.x))*PI);
     pct.b = pow( abs(sin(vt*.112+st.x)),0.5);

    color = mix(colorA, colorB, pct);

    // Plot transition lines for each channel
    color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));

    gl_FragColor = vec4(color,1.0);
}