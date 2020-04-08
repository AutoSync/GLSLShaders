#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main()
{
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    float len = 0.1;

    // Each result will return 1.0 (white) or 0.0 (black).
    // float top = step(0.1, uv.y);
    vec2 marginLeft = step(vec2(len),uv);
    float ml = marginLeft.x * marginLeft.y;

    vec2 marginRight = step(vec2(len),1.0-uv);
    float mr = marginRight.x * marginRight.y;
    
    color = vec3(ml * mr);



    gl_FragColor = vec4(color,1.0);
}