export function OwnToolTip(props) 
    return Tooltip({
      theme: {
        formatter: (v) => v.y.toFixed(2),
      shape: { color: "dodgerblue" }},
      ...props,
    })