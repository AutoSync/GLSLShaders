/********************
2020 Erick Andrade - 
Original code -> https://thebookofshaders.com/
Author @patriciogv - 2015
********************/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circle(in vec2 _uv, float _radius)
{
    vec2 length = _uv - vec2(0.5);
    return 1.0 - smoothstep(_radius-(_radius*0.01),
                _radius+(_radius*0.01), 
                dot(length, length)* 4.0);
}
vec2 translate2D(vec2 _uv,vec2 _translate)
{
    return vec2(_uv.x + _translate.x, 
                _uv.y + _translate.y);
}
void main()
{
    vec2 uv = gl_FragCoord.xy/u_resolution;
    float t = u_time / 1.0;
    vec3 color = vec3(1.0);

    
    uv *= 2.0;
    uv = fract(uv);

    //uv = translate2D(uv, vec2(0.1,0.2)); // New Translate


    vec3 shapeCircle = vec3(circle(uv, 0.5));

    color = vec3(uv,1.0);
    color = mix(color, color * shapeCircle, sin(t));
    gl_FragColor = vec4(color, 1.0);

}