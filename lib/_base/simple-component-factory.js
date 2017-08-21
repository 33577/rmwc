import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const simpleComponentFactory = (componentName = 'GenericComponent', opts = {}) => {
	const defaultTag = opts.tag || 'div';
	const propTypes = {
		...(opts.propTypes || {}),
		...(typeof defaultTag === 'object' && defaultTag.propTypes ? defaultTag.propTypes : {}),
		elementRef: PropTypes.func,
		tag: PropTypes.any,
		wrap: PropTypes.bool
	};

	const defaultProps = {
		...(opts.defaultProps || {}),
		...(typeof defaultTag === 'object' && defaultTag.defaultProps ? defaultTag.defaultProps : {}),
		elementRef: undefined,
		tag: defaultTag,
		wrap: false
	};

	const Component = props => {
		const {
			className,
			wrap,
			tag,
			children,
			elementRef,
			...rest } = props;

		const defaultClassNames = typeof opts.classNames === 'string'
			? [opts.classNames]
			: typeof opts.classNames === 'function'
				? opts.classNames(props)
				: opts.classNames || [];

		const classes = classNames(
			...defaultClassNames,
			className
		);

		const elementRefProp = elementRef ? {ref: elementRef} : {};

		// This gets around unknown prop warning
		// https://facebook.github.io/react/warnings/unknown-prop.html
		if (opts.consumeProps) {
			opts.consumeProps.forEach(key => (delete rest[key]));
		}

		const mergedProps = {
			className: classes,
			...elementRefProp,
			...rest
		};

		const Tag = tag;

		if (wrap) {
			return React.cloneElement(children, {
				...children.props,
				...mergedProps
			});
		} else {
			return (
				<Tag {...mergedProps}>{children}</Tag>
			);
		}
	};

	Component.propTypes = propTypes;
	Component.defaultProps = defaultProps;
	Object.defineProperty(Component, 'name', {value: componentName, writable: false});

	return Component;
};

export default simpleComponentFactory;