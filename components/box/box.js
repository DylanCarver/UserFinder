import styled from 'styled-components';
import { flexDirection, justifyContent, space } from 'styled-system';
import { fontSize, padding, borderRadius, color } from 'styled-system';
import { alignItems, height, width, display, minHeight } from 'styled-system';

const Box = styled.div`
${width}
${color}
${space}
${height}
${padding}
${display}
${fontSize}
${minHeight}
${alignItems}
${borderRadius}
${flexDirection}
${justifyContent}
`;

export default Box;
