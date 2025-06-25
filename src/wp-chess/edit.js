/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __, _x } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {{ attributes: Object, setAttributes: Function }} state
 * @param {Object}                                          state.attributes    block editor attributes.
 * @param {Function}                                        state.setAttributes attribute setter function.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { startFenPosition } = attributes;
	return (
		<div>
			<InspectorControls>
				<PanelBody
					title={ _x( 'Settings', 'Editor sidebar section header', 'wp-chess' ) }
				>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={ __( 'Starting FEN position', 'wp-chess' ) }
						value={ startFenPosition || '' }
						onChange={ ( value ) => setAttributes( { startFenPosition: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>{ __( "WordPress Chess block", "wp-chess" ) }</p>
            <p { ...useBlockProps() }>{ startFenPosition }</p>
		</div>
	);
}
