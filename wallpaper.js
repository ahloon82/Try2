export function Name() { return "Wallpaper Engine"; }
export function Version() { return "1.0.0"; }
export function Type() { return "network"; }
export function Publisher() { return "I'm Not MentaL"; }
export function Size() { return [32, 18]; }
export function DefaultPosition() { return [50, 50]; }
export function DefaultScale() { return 1.0; }
/* global
   discovery:readonly
   controller:readonly
   turnOffOnShutdown:readonly
*/
export function ControllableParameters() {
	return [
		{"property":"shutdownColor", "group":"lighting", "label":"关机颜色", description: "当系统或 SignalRGB 关闭时应用到设备的颜色", "min":"0", "max":"360", "type":"color", "default":"#009bde"},
		{"property":"LightingMode", "group":"lighting", "label":"灯光模式", description: "决定设备 RGB 来源。画布模式从当前效果获取，强制模式则覆盖为指定颜色", "type":"combobox", "values":["画布", "强制"], "default":"画布"},
		{"property":"forcedColor", "group":"lighting", "label":"强制颜色", description: "启用强制灯光模式时使用的颜色", "min":"0", "max":"360", "type":"color", "default":"#009bde"},
		{"property":"MatrixSize", "group":"settings", "label":"屏幕比例", description: "选择你的屏幕宽高比", "type":"combobox", "values":["4:3 横屏", "4:3 竖屏", "5:4 横屏", "5:4 竖屏", "16:9 横屏", "16:9 竖屏", "16:10 横屏", "16:10 竖屏", "21:9 横屏", "21:9 竖屏", "32:9 横屏", "32:9 竖屏"], "default":"16:9 横屏"},
		{"property":"SmoothingMode", "group":"settings", "label":"平滑模式", description: "指定线条、曲线及填充区域边缘是否使用平滑处理", "type":"combobox", "values":["默认", "高速", "高质量", "无", "抗锯齿"], "default":"默认"},
		{"property":"CompositingQuality", "group":"settings", "label":"合成质量", description: "决定图像合成时的渲染质量", "type":"combobox", "values":["默认", "高速", "高质量", "伽马校正", "假定线性"], "default":"默认"},
		{"property":"InterpolationMode", "group":"settings", "label":"插值模式", description: "影响图像缩放时的处理方式", "type":"combobox", "values":["默认", "低", "高", "双线性", "双三次", "邻近点", "高质量双线性", "高质量双三次"], "default":"默认"},
		{"property":"PixelOffsetMode", "group":"settings", "label":"像素偏移模式", description: "指定像素偏移 -.5 单位以实现高速抗锯齿", "type":"combobox", "values":["默认", "高速", "高质量", "无", "半像素"], "default":"默认"},
		{"property":"LedShape", "group":"settings", "label":"LED 形状", description: "选择你喜欢的 LED 形状", "type":"combobox", "values":["矩形", "圆角矩形", "球体"], "default":"矩形"},
		{"property":"RoundedRectangleCornerRadius", description: "设置圆角矩形的圆角大小（仅在 LED 形状为圆角矩形时生效）",  "label":"圆角矩形圆角半径","step":"1", "type":"number","min":"0", "max":"20","default":"2"},
		{"property":"LedPadding", "label":"LED 间距", description: "设置 LED 之间的间隔", "step":"1", "type":"number","min":"0", "max":"250","default":"0"},
		{"property":"LedUpdateInterval", "label":"LED 更新间隔", description: "指定 Wallpaper Engine 每帧更新的毫秒数", "step":"1", "type":"number","min":"1", "max":"200","default":"30"},
		{"property":"CoverImageSizeMode", "group":"settings", "label":"封面图尺寸模式", description: "指定图像在界面中的显示方式", "type":"combobox", "values":["正常", "拉伸", "自动", "居中", "缩放"], "default":"缩放"},
		{"property":"BackgroundColor", "group":"settings", "label":"背景颜色", description: "应用于背景的颜色", "min":"0", "max":"360", "type":"color", "default":"#000000"},
		{"property":"CpuUsagePauseValue", "label":"CPU 使用率暂停阈值", description: "当 CPU 使用率过高时，暂时暂停效果以降低使用率（适合低性能电脑）", "step":"1", "type":"number","min":"50", "max":"100","default":"60"},
		{"property":"CoverImage", "label": "封面图像", "type": "textfield", description: "用于覆盖虚拟 LED 的扩散图像，支持本地和网络文件 (示例: 'C:\\Users\\BARRY\\Pictures\\razer2.png' 或 'https://github.com/qiangqiang101/OpenRGB-Wallpaper/raw/master/Wallpaper-Wallpaper/razer5.png?raw=true')", "default": "https://github.com/qiangqiang101/OpenRGB-Wallpaper/raw/master/Wallpaper-Wallpaper/razer5.png?raw=true"},
	];
}

// 后续代码保持不变...
