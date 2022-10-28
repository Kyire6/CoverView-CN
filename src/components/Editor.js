import React from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';
// import resetIcon from '../assets/icons/reset.svg'

const defaultSettings = {
	title: "如何使用 React 构建我的第一个项目",
	bgColor: "#dcd6f7",
	pattern: "",
	download: "PNG",
	author: 'Rutik Wankhade & David Weng',
	icon: { 'label': 'react', 'value': 'react' },
	devIconOptions: {},
	font: 'font-sans',
	theme: 'modern',
	customIcon: ''

};

const devIconsUrl = "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json"
// const devIconOptions = [
// 	{ value: 'None', label: 'None' },
// 	{ value: 'javascript', label: 'Javascript' },
// 	{ value: 'python', label: 'Python' },

class Editor extends React.Component {

	state = defaultSettings;
	componentDidMount() {
		console.log("Mount")
		fetch(devIconsUrl).then(r => r.json()).then(data => {
			data.push({ name: 'custom' })
			this.setState({ devIconOptions: data.map(item => ({ 'value': item.name, 'label': item.name })) })
		})
	}
	handleReset = () => {
		this.setState(defaultSettings);
	};

	getRandomTheme = (theme, Pattern) => {
		this.setState({ bgColor: theme.bgColor, borderColor: theme.bdColor, pattern: Pattern });
	}

	formatOptionLabel = ({ value, label }) => (
		<div className="flex">
			<span className="mr-2">{label}</span>
			<div className="ml-auto mr-2">
				<i className={`devicon-${value}-plain dev-icon text-2xl`}></i>
			</div>
		</div>
	);


	// customOption = props => {
	// 	const { data, innerRef, innerProps } = props;

	// 	return data.name === 'custom' ? (
	// 		<div ref={innerRef} {...innerProps}>
	// 			<input type="file"
	// 				className="text-xl cursor-pointer mb-2 bg-white rounded border"
	// 				onChange={(e) => this.setState({ 'customIcon': URL.createObjectURL(e.target.files[0]) })}
	// 			/>
	// 		</div>
	// 	) : (
	// 		<components.Option {...props} />
	// 	);


	// };


	render() {
		return (
			<div className="flex md:flex-row flex-col bg-gray-50 ">
				<div className="bg-white shadow-sm p-4 flex flex-col md:w-1/4">
					{/* <p className="tagline"><span role="img" aria-label="tool"> 🛠 </span> Creating cover images for your blogs is now super easy</p> */}

					<div className="flex items-center mb-4 ">
						<h1 className=" text-gray-800 text-2xl font-bold ">Coverview</h1>
					</div>
					<div className="m-2 flex flex-col">
						<span className="font-medium">博客标题</span>
						<textarea
							type="text"
							value={this.state.title}
							placeholder="在此输入标题"
							className="border text-gray-700 text-xl rounded  p-2 h-24"
							onChange={(e) => this.setState({ title: e.target.value })}
						/>
					</div>

					<div className="flex flex-col m-2 ">
						<span className="font-medium">作者</span>
						<input
							type="text"
							value={this.state.author}
							placeholder="Author"
							className="border text-gray-700 text-xl rounded bg-white p-2"
							onChange={(e) => this.setState({ author: e.target.value })}
						></input>
					</div>



					<div className="flex items-center">

						<div className="flex flex-col m-2 w-1/2">
							<span className="font-medium">字体</span>

							<select
								value={this.state.font}

								onChange={(e) => this.setState({ font: e.target.value })}

								className=" text-gray-700 text-xl p-2 rounded border">
								<option>font-serif</option>
								<option>font-sans</option>
								<option>font-mono</option>
							</select>
						</div>
						<div className="flex flex-col m-2 ">
							<span className="font-medium">颜色</span>
							<div className="border rounded flex items-center p-2">

								<span className="text-sm text-gray-700 font-semibold mx-2">{this.state.bgColor}</span>
								<input type="color" value={this.state.bgColor}
									onChange={(e) => this.setState({ bgColor: e.target.value })}
									className="h-8 w-8  rounded"
								/>
							</div>
						</div>

					</div>






					<div className="flex flex-col m-2 ">
						<span className="font-medium">图标</span>
						<Select value={this.state.icon}
							onChange={(selectedOption) => this.setState({ icon: selectedOption })}
							options={this.state.devIconOptions}
							formatOptionLabel={this.formatOptionLabel}
							className="text-xl text-gray-700"
						/>
					</div>

					{this.state.icon.label === 'custom' ?
						<div className="flex items-center justify-center m-2">
							<input type="file"
								className="text-lg cursor-pointer bg-white rounded border"
								onChange={(e) => this.setState({ 'customIcon': URL.createObjectURL(e.target.files[0]) })}
							/>
						</div>
						:
						<div></div>
					}

					<div className="flex">


						<div className="flex flex-col m-2 w-1/2">
							<span className="font-medium">图案</span>
							<select
								onChange={(e) => this.setState({ pattern: e.target.value })}
								className="border text-xl p-2 rounded"
								value={this.state.pattern}>

								<option>无</option>
								<option>方格纸</option>
								<option>拼图</option>
								<option>隐藏</option>
								<option>圆点</option>
								<option>倒三角</option>
								<option>电路板</option>
								<option>圣殿</option>
								<option>锚</option>
								<option>砖墙</option>
								<option>重叠圆</option>
								<option>摇摆</option>
								<option>井字棋</option>
								<option>叶子</option>
								<option>气泡</option>
								<option>方格</option>
								<option>探索者</option>
								<option>木星</option>
								<option>太阳</option>
							</select>
						</div>

						<div className="flex flex-col m-2 w-1/2">
							<span className="font-medium">主题</span>

							<select
								onChange={(e) => this.setState({ theme: e.target.value })}
								value={this.state.theme}

								className="text-gray-700 text-xl p-2 rounded border">
								<option>基本</option>
								<option>现代</option>
								<option>大纲</option>
								<option>预览</option>

							</select>
						</div>

					</div>



					{/* <div className="mx-4 my-1">
						<h6>Download As</h6>
						<select onChange={(e) => this.setState({ download: e.target.value })}
							className="form-control input"
							value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div> */}



				</div>

				<div className="m-2 items-center justify-center flex flex-col">
					<RandomTheme onThemeChange={this.getRandomTheme} />
					{/* <button
						className="flex items-center mx-auto border"
						onClick={this.handleReset}>
						<img src={resetIcon} className="shuffle-btn border bg-white p-2 rounded cursor-pointer"/>
					</button> */}
				</div>

				<div className="flex flex-col items-center justify-center ">
					<ComponentToImg downloadAs={this.state.download}>
						<CoverImage {...this.state} />
					</ComponentToImg>
				</div>

			</div>
		);
	}
}

export default Editor;
