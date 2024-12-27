import PropTypes from "prop-types";

function Title({ text1, text2 }) {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1.3px] sm:2-[2.3px] bg-slate-700 "></p>
    </div>
  );
}
Title.propTypes = {
  text1: PropTypes.node.isRequired, // Mark `children` as required
  text2: PropTypes.node.isRequired, // Mark `children` as required
};

export default Title;
