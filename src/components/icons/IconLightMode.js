export default function IconLightMode (props) {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={34}
          height={34}
          viewBox="0 0 24 24"
          color="#fff"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          style={{
            cursor: "pointer",
            transform: "rotate(90deg)",
          }}
          {...props}
        >
          <mask id="a">
            <rect width="100%" height="100%" fill="#fff" />
            <circle
              style={{
                cx: "100%",
                cy: "0%",
              }}
              r={9}
              fill="#000"
            />
          </mask>
          <circle
            cx={12}
            cy={12}
            fill="#fff"
            style={{
              r: 5,
            }}
            mask="url(#a)"
          />
          <g
            style={{
              opacity: 1,
            }}
          >
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </g>
        </svg>
    )
}