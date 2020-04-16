/********************
2020 Erick Andrade - 
********************/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float plot (vec2 _uv, float pct)
{
  return  smoothstep( pct-0.01, pct, _uv.y) -
          smoothstep( pct, pct+0.01, _uv.y);
}
void main()
{   
    vec2 uv = gl_FragCoord.xy/ u_resolution.xy;
    vec3 color = vec3(0.0);
    float t = u_time / 1.0;

    
    vec3 line = vec3(1.0);

    line.x = smoothstep(0.1,0.2, sin(uv.x));
    line.y = smoothstep(0.25, 0.75, sin(uv.x) );
    line.z = smoothstep(0.0,1.0, abs(sin(uv.x)));

    

    color.x = plot(uv, sin(line.x));
    color.y = plot(uv, sin(line.y));
    color.z = plot(uv, sin(line.z));
  


    gl_FragColor = vec4(color, 1.0);

}