/**
 * @author lzz
 * 
 */

var lzzDome = {

	/*
	    *****字符串*****
	*/

	/* 1.去除空格 */
	// type  1-所有空格  2-前后空格   3-前空格  4-后空格
	trim: function (str, type) {
		switch (type) {
			case 1:
				return str.replace(/\s+/g, '');
			case 2:
				return str.replace(/(^\s*)|(\s*$)/g, '');
			case 3:
				return str.replace(/(^\s*)/g, '');
			case 4:
				return str.replace(/(\s*$)/g, '');
			default:
				return str;
		}
	},
	//示例：
	//trim('  1235asd',1)
	//result：'1235asd'


	/* 2.字母大小写切换 */
	//type  1-首字母大写  2-首字母小写  3-大小写转换  4-全部大写  5-全部小写
	changeCase: function (str, type) {
		function ToggleCase(str) {
			let itemText = '';
			str.split('').forEach(
				function (item) {
					if (/^([a-z]+)/.test(item)) {
						itemText += item.toUpperCase();
					} else if (/^([A-Z]+)/.test(item)) {
						itemText += item.toLowerCase();
					} else {
						itemText += item;
					}
				}
			);
			return itemText;
		}
		switch (type) {
			case 1:
				return str.replace(/\b\w+\b/g, function (word) {
					return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
				});
			case 2:
				return str.replace(/\b\w+\b/g, function (word) {
					return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
				});
			case 3:
				return ToggleCase(str);
			case 4:
				return str.toUpperCase();
			case 5:
				return str.toLowerCase();
			default:
				return str;
		}
	},
	//示例：
	//changeCase('asdasd',1)
	//result：'Asdasd'

	
	/* 3.字符串循环复制 */
	//  str-字符串   count-次数
	repeatStr: function (str, count) {
		let text = '';
		for (var i = 0; i < count; i++) {
			text += str;
		}
		return text;
	},
	//示例：
	//repeatStr('123',3)
	//result：'123123123'


	/* 4.字符串替换  */
	// str-字符串  AFindText-被替换的字符串(不能写g)   ARepText-替换的字符串
	replaceAll: function (str, AFindText, ARepText) {
		raRegExp = new RegExp(AFindText, 'g');
		return str.replace(raRegExp, ARepText);
	},
	//示例：
	//replaceAll('你好我叫小明','小明','狗蛋')
	//result: '你好我叫狗蛋'


	/* 5.字符替换 */
	// str-字符串  regArr-字符格式  type-替换方式  ARepText-替换的字符(默认*)
	replaceStr: function (str, regArr, type, ARepText) {
		let regtext = '';
		Reg = null;
		replaceText = ARepText || '*';
		if (regArr.length === 3 && type === 0) {
			regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})';
			Reg = new RegExp(regtext);
			let replaceCount = this.repeatStr(replaceText, regArr[1]);
			return str.replace(Reg, '$1' + replaceCount + '$2');
		}
		//示例：
		//replaceStr('13211068888',[3,5,3],0)
		//result: '132*****888'

		else if (regArr.length === 3 && type === 1) {
			regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
			Reg = new RegExp(regtext);
			var replaceCount1 = this.repeatStr(replaceText, regArr[0]);
			var replaceCount2 = this.repeatStr(replaceText, regArr[2]);
			return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
		}
		//示例：
		//replaceStr('asdasdasdaa',[3,5,3],1)
		//result：'***asdas***'

		else if (regArr.length === 1 && type === 0) {
			regtext = '(^\\w{' + regArr[0] + '})'
			Reg = new RegExp(regtext);
			var replaceCount = this.repeatStr(replaceText, regArr[0]);
			return str.replace(Reg, replaceCount)
		}
		//示例：
		//replaceStr('1asd88465asdwqe3',[5],0)
		//result：*****8465asdwqe3

		else if (regArr.length === 1 && type === 1) {
			regtext = '(\\w{' + regArr[0] + '}$)'
			Reg = new RegExp(regtext);
			var replaceCount = this.repeatStr(replaceText, regArr[0]);
			return str.replace(Reg, replaceCount)
		}
		//示例：
		//replaceStr('1asd88465asdwqe3',[5],1,'+')
		//result："1asd88465as+++++"
	},


	
};