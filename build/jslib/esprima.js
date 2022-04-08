define(['meriyah'], function ({ parseScript }) {
	// Adapts the esprima interface to meriyah
	return {
		parse(contents, options = {}) {
			let { range, comment: comments } = options;
			if (range) {
				options.ranges = true;
				delete options.range;
			}
			if (comments) {
				comments = options.onComment = [];
				delete options.comment;
			}
			options.next = true;
			const ast = parseScript(contents, options);
			if (comments) ast.comments = comments;
			return ast;
		}
	};
});
