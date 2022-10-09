(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c","aria-hidden":"true"}},[t._v("#")]),t._v(" c")]),t._v(" "),a("ul",[a("li",[a("p",[t._v(".h 是头文件 代表类型")])]),t._v(" "),a("li",[a("p",[t._v(".cpp 是执行文件")])]),t._v(" "),a("li",[a("p",[t._v("A::fn()  :: 代表属于")])]),t._v(" "),a("li",[a("p",[t._v("cout >> 'xxx \\n'; 输出")])]),t._v(" "),a("li",[a("p",[t._v("cin >> a; 输入的值用a接受")])]),t._v(" "),a("li",[a("p",[t._v("' \\n' 是换行")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<<endl; 也是换行")])])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("// 预处理命令\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n// 命名空间 \nusing  namespace std;\n// int 对外界返回一个整数\nint main() "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int a;\n    cout << '123';\n    cin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" a;\n    cout << a;\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// 联合输入\ncin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' b ;\ncout << "a=" << a << "b=" << b;\n')])])]),a("h2",{attrs:{id:"处理精度问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理精度问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理精度问题")]),t._v(" "),a("ul",[a("li",[t._v("cout << 0.123456678;")]),t._v(" "),a("li",[t._v("setprecision(6) 函数包括整数(会四舍五入)  6代表位数")]),t._v(" "),a("li",[t._v("setiosflags(ios::fixed)")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iomanip>")]),t._v("\nusing namespace std;\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int a;\n    int b;\n    cout << 0.12345678 << endl;\n    // 0.123457\n    cout << setprecision(8) << 0.123456678 << endl;\n    // 0.12345668\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"命名空间-std"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名空间-std","aria-hidden":"true"}},[t._v("#")]),t._v(" 命名空间 std")]),t._v(" "),a("ul",[a("li",[t._v("using  namespace std; 命名空间 能识别 cout cin endl;")]),t._v(" "),a("li",[t._v("或者用::(属于)")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\nusing namespace std;\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int a;\n    int b;\n    cout << 0.12345678 << endl;\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n或者\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int a;\n    int b;\n    std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("cout << 0.12345678 << std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("endl;\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"设置宽度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置宽度","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置宽度")]),t._v(" "),a("ul",[a("li",[t._v("setw(10) 需要 每次都设置")]),t._v(" "),a("li",[a("code",[t._v("cout<<setiosflags(ios::left);")]),t._v(" 靠左对其")]),t._v(" "),a("li",[a("code",[t._v("cout<<resetiosflags(ios::left);")]),t._v(" 取消掉")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\nusing namespace std;\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int a;\n    int b;\n    cout << setw(10) << 12345678 << endl;\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"设置进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置进制","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置进制")]),t._v(" "),a("ul",[a("li",[t._v("setbase 需要"),a("code",[t._v("<iomanip>")]),t._v("声明")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iomanip>")]),t._v("\n\nusing namespace std;\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n    int a;\n    int b;\n    cout<<setbase(8)<<4<<" "<<333 << endl;\n    return 0;\n'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// 另一种方式\n// oct 8进制"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  hex 16进制"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  dec 10进制;\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\nusing namespace std;\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n    int a;\n    int b;\n    // 8进制\n    cout<<oct<<4<<" "<<333 << endl;\n    // 16进制\n    cout<<hex<<4<<" "<<333 << endl;\n    // 10进制\n    cout<<dec<<4<<" "<<333 << endl;\n    return 0;\n'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("unsigned 无符号, 下面都是小写不能大写")])]),t._v(" "),a("li",[a("p",[t._v("短整型(两字节)")])]),t._v(" "),a("li",[a("p",[t._v("short")])]),t._v(" "),a("li",[a("p",[t._v("unsigned short")])]),t._v(" "),a("li",[a("p",[t._v("整型(四字节)")])]),t._v(" "),a("li",[a("p",[t._v("int")])]),t._v(" "),a("li",[a("p",[t._v("unsigned int")])]),t._v(" "),a("li",[a("p",[t._v("单精度浮点型(四字节)")])]),t._v(" "),a("li",[a("p",[t._v("float")])]),t._v(" "),a("li",[a("p",[t._v("双精度浮点型(八字节)")])]),t._v(" "),a("li",[a("p",[t._v("double")])]),t._v(" "),a("li",[a("p",[t._v("字符串")])]),t._v(" "),a("li",[a("p",[t._v("char")])]),t._v(" "),a("li",[a("p",[t._v("unsigned char")])]),t._v(" "),a("li",[a("p",[t._v("布尔型")])]),t._v(" "),a("li",[a("p",[t._v("bool   true/false  0/1")])]),t._v(" "),a("li",[a("p",[t._v("枚举 enum")])]),t._v(" "),a("li",[a("p",[t._v("enum level{a,b,c,d}")])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\nusing namespace std;\nenum  level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    level my1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("my2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("my3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("my4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("my5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("my6;\n    my1 = a;\n    my2 = b;\n    my3 = c;\n    my4 = d;\n    my5 = e;\n    my6 = f;\n    cout << my1 << my2<< my3<< my4<< my5<< my6;\n    // 012345\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"string-也需要使用-std"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-也需要使用-std","aria-hidden":"true"}},[t._v("#")]),t._v(" string 也需要使用 std")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <string>")]),t._v("\nusing namespace std;\nenum  level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n    string a="1312321ssdsd大大";\n    cout << a << endl;\n    // 可以访问单个字符\n    cout << a'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" << endl;\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"include-time-h-处理随机数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include-time-h-处理随机数","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("# include<time.h>")]),t._v(" 处理随机数")]),t._v(" "),a("ul",[a("li",[t._v("srand(time(0)); 随机数的种子")]),t._v(" "),a("li",[t._v("如果没有这个 随机数都是一样的")]),t._v(" "),a("li",[t._v("srand")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <string>")]),t._v("\nusing namespace std;\nenum  level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    srand(time(0));\n    int b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n    cout << b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" << '=' << rand() << endl;\n    cout << b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" << '=' << rand() << endl;\n    cout << b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" << '=' << rand() << endl;\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),a("ul",[a("li",[t._v("一维")]),t._v(" "),a("li",[a("code",[t._v("int arr[3] = {1,2,3}")])]),t._v(" "),a("li",[t._v("二维")]),t._v(" "),a("li",[a("code",[t._v("int arr[2][2] = {1,2,3,4};")]),t._v(" 他也是个线性的")])]),t._v(" "),a("h2",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("ul",[a("li",[t._v("char")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <string>")]),t._v("\nusing namespace std;\nenum  level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    //  '\\0' 代表char的结束(没有会 乱码) 没有好像也可以\n    char str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n    cout << str << endl;\n\n    // 这里得到 str 后面只能写 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1 个字符  因为末尾默认添加了一个\\0\n    char str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(' = "abcd";\n    cout << str << endl;\n\n    // 将后一个字符连接到给前一个后面\n    char str1'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" = “12345“;\n    char str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" = “67890”;\n    strcat(str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str2)\n    cout << str << endl;// '1234567890'\n    // 将后一个复制给前一个字符\n    strcpy(str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str2)\n    cout << str << endl;// '67890'\n    // strlen 长度\n    int r = strlen(str1);\n    cout << r << endl;// '5'\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"指针-字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针-字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 指针 - 字符串")]),t._v(" "),a("ul",[a("li",[t._v("&代表取地址  指针实际保存的是一个地址")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <string>")]),t._v("\nusing namespace std;\nenum  level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int a=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b=2;\n    int "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*p1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*p2")]),t._v(";\n    // p1 指针 &代表取地址  指针实际保存的是一个地址\n    p1 = "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&a")]),t._v(";\n    // 指针的前面加* 表示该地址保存的数值\n    cout << "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*p1")]),t._v(" << endl;\n    // char 声明的字符串就是一个指针\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"指针-数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针-数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 指针 - 数组")]),t._v(" "),a("ul",[a("li",[t._v("new  让指针指向新的内存地址")]),t._v(" "),a("li",[t._v("delete 删除 指针指向的地址")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("int arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nint "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*p")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n// 地址+1 就是p所在的地址 往后推一个数据长度\np+ = 1\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <string>")]),t._v("\nusing namespace std;\nenum  level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(";\n    srand(time(0));\n    int i;\n    for(i=0;i<5;i++) arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(' = rand()%50+1;\n    cout << "用下标对数组进行遍历'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' \\n";\n    for(i=0;i<5;i++) cout << arr'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("<<'\\t';\n    cout<<endl;\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('cout<<"用指针对数组进行遍历')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' \\n";\n    int'),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*p")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(";\n    for(i=0;i<5;i++)\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cout<<"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*p")]),t._v("<<'\\t';\n        p++;\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    cout<<endl;\n    delete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("arr;\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("申请动态一维数组")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <string>")]),t._v("\nusing namespace std;\nenum  level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n    int len;\n    cout<< "请输入数组长度："<<endl;\n    cin'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("len;\n    // 动态声明\n    int "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*arr")]),t._v(" = new int(len);\n    for(int i=0; i<len;i++)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" = i+1;\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(";\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("申请动态二维数组")]),t._v(" "),a("li",[t._v("int **arr = new *p")])]),t._v(" "),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <string>")]),t._v("\nusing namespace std;\n\nint  sum(int n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("int m)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    return  n+m;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v('m;\n    cout<< "请输入数值："<<endl;\n    cin'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("n;\n    cin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("m;\n    int num;\n    num = sum(n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("m);\n    cout<< num <<endl;\n    return 0;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"素数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#素数","aria-hidden":"true"}},[t._v("#")]),t._v(" 素数")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <iostream>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include <string>")]),t._v("\nusing namespace std;\nbool isPrime(unsigned int n)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    if(n==0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("n==1)return false;\n    for(int i=2;i<n;i++)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        if(n%i==0)return false;\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    return true;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nint main()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n    int n;\n    cout<< "请输入数值："<<endl;\n    cin'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v('n;\n    bool r = isPrime(n);\n    if(r) cout<<"是素数'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('"<<endl;\n    if('),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!r)")]),t._v(' cout<<"不是素数"<<endl;\n    return 0;\n'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);n.default=e.exports}}]);