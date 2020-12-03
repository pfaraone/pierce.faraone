import {createElement} from 'react'
import styled from 'styled-components';
import * as icons from '../../assets'

const Icon = ({ name, size=36, height=36, width=36, viewBox='0 0 36 36', fill= 'currentColor', ...props }) => (
	icons[name]
		? createElement(icons[name], {
				height: height || size,
				width: width || size,
				...props,
		  })
		: null)

const StyledIcon= styled(Icon)` 
	margin-top: 1rem;
	margin-bottom: 0.5rem;
`
export default StyledIcon;