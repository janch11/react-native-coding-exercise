import {StyleProp, ViewStyle} from "react-native";
import { SvgXml } from "react-native-svg";

export function ChevronCircleRight({style}: {style?: StyleProp<ViewStyle>}) {
    return (
        <SvgXml
            style={style}
            xml={`
                <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="m17.6 16-3.683-4.01a.818.818 0 0 1 0-1.149.8.8 0 0 1 1.136 0l4.491 4.582a.816.816 0 0 1 0 1.147l-4.491 4.582a.8.8 0 0 1-1.136 0 .816.816 0 0 1 0-1.147L17.6 16zM16 .64A15.36 15.36 0 1 1 .64 16 15.36 15.36 0 0 1 16 .64zm0 28.726A13.366 13.366 0 1 0 2.634 16 13.366 13.366 0 0 0 16 29.366z" transform="translate(-.64 -.64)" style="fill:#d14b39"/>
                </svg>
            `}
      />
    )
}