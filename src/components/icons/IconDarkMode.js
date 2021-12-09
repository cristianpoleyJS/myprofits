export default function IconDarkMode (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      viewBox="0 0 24 24"
      color="#000"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      style={{
        cursor: "pointer",
        transform: "rotate(40deg)",
      }}
      {...props}
    >
      <mask id="a">
        <rect width="100%" height="100%" fill="#fff" />
        <circle
          style={{
            cx: "50%",
            cy: "23%",
          }}
          r={9}
          fill="#000"
        />
      </mask>
      <circle
        cx={12}
        cy={12}
        fill="#000"
        style={{
          r: 9,
        }}
        mask="url(#a)"
      />
    </svg>
  )
}