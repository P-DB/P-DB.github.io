// VHS-style distortion: noise with only vertical frequency produces horizontal
// bands, which displace the text sideways. Mostly a gentle wobble, with short
// bursts of heavy tearing. Applied via CSS only when motion is allowed.
export function GlitchFilter() {
  return (
    <svg className="glitch-defs" aria-hidden="true" focusable="false">
      <filter id="glitch" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0 0.09" numOctaves="1" seed="2" result="noise">
          <animate
            attributeName="seed"
            values="2;7;13;21;34;55;89;144"
            dur="0.8s"
            calcMode="discrete"
            repeatCount="indefinite"
          />
        </feTurbulence>
        {/* Pin the green channel to 0.5 so the y offset is zero: horizontal shift only */}
        <feColorMatrix
          in="noise"
          type="matrix"
          values="1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 0  0 0 0 0 1"
          result="bands"
        />
        <feDisplacementMap in="SourceGraphic" in2="bands" scale="6" xChannelSelector="R" yChannelSelector="G">
          <animate
            attributeName="scale"
            values="6;6;6;6;6;6;6;6;40;10;55;6;6;6;6;6;6;6;6;6;30;6"
            dur="4s"
            calcMode="discrete"
            repeatCount="indefinite"
          />
        </feDisplacementMap>
      </filter>
    </svg>
  )
}
