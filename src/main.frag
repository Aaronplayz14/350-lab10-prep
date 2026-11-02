#version 120 // glsl version 1.2 for OpenGL 2.1

uniform vec2 windowSize;
uniform vec2 mousePosition;
uniform float elapsedTime;

void main() {
    vec2 uv = gl_FragCoord.xy / windowSize;
    vec3 color = vec3(uv.x, uv.y, 0.0);
    color.b = (sin(elapsedTime) + 1.0) * 0.25;

    if (distance(gl_FragCoord.xy, mousePosition) <= 10.0) {
        color = vec3(1.0);
    }

    gl_FragColor = vec4(color, 1.0);
}
