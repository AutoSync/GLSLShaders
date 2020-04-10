/********************
2020 Erick Andrade - 
Original code ->
// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com
********************/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat3 yuv2rgb = mat3(1.0, 0.0, 1.13893,
                    1.0, -0.39465, -0.58060,
                    1.0, 2.03211, 0.0);

mat3 rgb2yov = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600,
                    0.615, -0.5586, -0.05639);
void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float t = u_time / 1.0;
    vec3 color = vec3(1.0);

    uv -= 0.5;
    uv*= 2.0;

    //color = yuv2rgb * vec3(0.5, uv.x, uv.y);
    //color = rgb2yov * vec3(0.5, uv.x, uv.y);
    
    // Combine YUV 2 RGB with RGB 2 YUV using the time alpha in sin + cos
    vec3 Rainbow = mix(yuv2rgb * vec3(0.5, uv.x, uv.y), 
                    rgb2yov * vec3(0.5, uv.x, uv.y), 
                    sin(t) + cos(t));

    color = Rainbow;
    gl_FragColor = vec4(color, 1.0);

}