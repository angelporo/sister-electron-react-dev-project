// @flow
import React, {Component} from "react";
import {Table, Card, Button} from "antd";
import {EditableCell, EditableFormRow} from "./Editable.js";
import {Link} from "react-router-dom";
import "./Editable.less";

export default class EditableTable extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "序号",
        dataIndex: "num",
        key: "num",
        width: 60,
        render: (text, record, index) => {
          return <div key={record.id}>{index + 3}</div>;
        },
      },
      {
        title: "名称(A)",
        dataIndex: "A",
      },
      {
        title: "预估值(B)%",
        dataIndex: "B",
      },
      {
        title: "结晶水(C)",
        dataIndex: "C",
      },
      {
        title: "氧化硅(D)",
        dataIndex: "D",
      },
      {
        title: "氧化铝(E)",
        dataIndex: "E",
      },
      {
        title: "其他(F)",
        dataIndex: "F",
      },
      {
        title: "硅铝比(G)",
        dataIndex: "G",
      },
      {
        title: "实测值(H)%",
        dataIndex: "H",
        editable: true,
        width: 120,
      },
      {
        title: "119#",
        dataIndex: "I",
      },
    ];

    this.state = {
      dataSource: [
        {
          // 3
          id: "a",
          A: "高岭土",
          B: 91.5,
          C: 0.1395,
          D: 0.4651,
          E: 0.3953,
          F: "",
          G: null,
          H: null,
        },
        {
          // 4
          id: "b",
          A: "石英",
          B: null,
          C: 0,
          D: 1,
          E: 0,
        },
        {
          // 5
          id: "c",
          A: "钾长石",
          B: null,
          C: 0,
          D: 0.647,
          E: 0.184,
          F: 0.169,
          G: null,
          H: 0.178,
        },
        {
          // 6
          id: "d",
          A: "钠长石",
          B: null,
          C: 0,
          D: 0.687,
          E: 0.1947,
          F: 0.1183,
          G: null,
          H: null,
          I: 10.8,
        },
        {
          // 7
          id: "e",
          A: "滑石",
          B: null,
          C: 0.0476,
          D: 0.6349,
          E: 0,
          F: 0.3175,
          G: null,
          H: 0.116,
        },
        {
          // 8
          id: "f",
          A: "钙长石",
          B: null,
          C: 0,
          D: 0.695,
          E: 0.1969,
          F: 0.1081,
          G: null,
          H: 0.202,
        },
        {
          // 9
          id: "g",
          A: "氧化铁",
          B: null,
          C: 0,
          D: 0,
          E: 0,
          F: 1.0,
          G: null,
          H: 0.259,
        },
        {
          // 10
          id: "h",
          A: "氧化钛",
          B: null,
          C: 0,
          D: 0,
          E: 0,
          F: 1.0,
          G: null,
          H: 0.702,
        },
        {
          // 11
          id: "i",
          A: "重金属",
          B: null,
          C: null,
          D: null,
          E: null,
          F: 1,
          G: null,
          H: 0.029,
        },
        {
          id: "j",
          // 12
          A: "六偏",
          B: null,
          C: null,
          D: null,
          E: null,
          F: 1,
          G: null,
          H: 0.0,
        },
        {
          // 13
          id: "l",
          A: "软水铝石",
          B: 2.0,
          C: 0.15,
          D: null,
          E: 0.85,
          F: null,
          G: null,
          H: null,
          I: null,
        },
        {
          // 14
          id: "m",
          A: "碳氢硫化物",
          B: 0.84,
          C: 1.0,
          D: null,
          E: 0.85,
          F: null,
          G: null,
          H: null,
          I: null,
        },
        {
          // 15
          id: "n",
          A: "结晶水",
          B: 1.2,
          C: null,
          D: null,
          E: null,
          F: null,
          G: null,
          H: "品益份",
          I: null,
        },
        {
          // 16
          id: "o",
          C: 13.9,
          G: 2.02,
        },
      ],
      count: 2,
    };
  }

  componentDidMount() {
    console.log("ok");
    this.countValue();
  }

  countValue = () => {
    // NOTE: 顺序不可以打乱不然会出现NAN情况
    this.setValueByCoordinate("G-3", this.getG3());
    this.setValueByCoordinate("G-5", this.getG5());
    this.setValueByCoordinate("G-6", this.getG6());
    this.setValueByCoordinate("B-7", this.getB7());
    this.setValueByCoordinate("G-8", this.getG8());
    this.setValueByCoordinate("B-9", this.getB9());
    this.setValueByCoordinate("B-10", this.getB10());
    this.setValueByCoordinate("B-11", this.getB11());
    this.setValueByCoordinate("B-12", this.getB12());

    this.setValueByCoordinate("B-5", this.getB5());
    this.setValueByCoordinate("H-6", this.getH6());
    this.setValueByCoordinate("B-6", this.getB6());
    this.setValueByCoordinate("B-8", this.getB8());
    this.setValueByCoordinate("B-4", this.getB4());

    this.setValueByCoordinate("C-15", this.getC15());
    this.setValueByCoordinate("I-13", this.getI13());
    this.setValueByCoordinate("D-15", this.getD15());
    this.setValueByCoordinate("E-15", this.getE15());
    this.setValueByCoordinate("F-15", this.getF15());
    this.setValueByCoordinate("G-15", this.getG15());

    this.setValueByCoordinate("I-3", this.getI3());
    this.setValueByCoordinate("I-4", this.getI4());
    this.setValueByCoordinate("I-15", this.getI15());
  };

  getI4 = () => {
    // B4*(1-C4)/(1-C15)
    return (
      (this.getValueByCoordinate("B-4") *
        (1 - this.getValueByCoordinate("C-4"))) /
      (1 - this.getValueByCoordinate("C-15")) /
      100
    ).toFixed(5);
  };

  getI3 = () => {
    // B3*(1-C3)/(1-C15)
    return (
      (this.getValueByCoordinate("B-3") *
        (1 - this.getValueByCoordinate("C-3"))) /
      (1 - this.getValueByCoordinate("C-15")) /
      100
    ).toFixed(5);
  };

  getI15 = () => {
    // I3+I13
    return this.getValueByCoordinate("I-3") + this.getValueByCoordinate("I-13");
  };

  getG15 = () => {
    // (D15/60)/(E15/102)
    return (
      this.getValueByCoordinate("D-15") /
      60 /
      (this.getValueByCoordinate("E-15") / 102)
    ).toFixed(3);
  };

  getF15 = () => {
    // SUM(H5:H12)
    return (
      (this.getValueByCoordinate("H-5") +
        this.getValueByCoordinate("H-6") +
        this.getValueByCoordinate("H-7") +
        this.getValueByCoordinate("H-8") +
        this.getValueByCoordinate("H-9") +
        this.getValueByCoordinate("H-10") +
        this.getValueByCoordinate("H-11") +
        this.getValueByCoordinate("H-12")) /
      100
    ).toFixed(4);
  };

  getE15 = () => {
    // E3*B3+E4*B4+E5*B5+E6*B6+E7*B7+E8*B8+E13*B13
    return (
      (this.getValueByCoordinate("E-3") * this.getValueByCoordinate("B-3") +
        this.getValueByCoordinate("E-4") * this.getValueByCoordinate("B-4") +
        this.getValueByCoordinate("E-5") * this.getValueByCoordinate("B-5") +
        this.getValueByCoordinate("E-6") * this.getValueByCoordinate("B-6") +
        this.getValueByCoordinate("E-7") * this.getValueByCoordinate("B-7") +
        this.getValueByCoordinate("E-8") * this.getValueByCoordinate("B-8") +
        this.getValueByCoordinate("E-13") * this.getValueByCoordinate("B-13")) /
      100
    ).toFixed(4);
  };
  getB8 = () => {
    // H8/F8
    return (
      this.getValueByCoordinate("H-8") / this.getValueByCoordinate("F-8")
    ).toFixed(3);
  };

  getH6 = () => {
    // I6-H12*0.3039
    return (
      (this.getValueByCoordinate("I-6") -
        this.getValueByCoordinate("H-12") * 0.3039) /
      100
    ).toFixed(3);
  };

  getB6 = () => {
    // H6/F6
    return (
      this.getValueByCoordinate("H-6") / this.getValueByCoordinate("F-6")
    ).toFixed(3);
  };

  getB5 = () => {
    // H5/F5
    return (
      this.getValueByCoordinate("H-5") / this.getValueByCoordinate("F-5")
    ).toFixed(3);
  };

  getB4 = () => {
    const result =
      100 -
      this.getValueByCoordinate("B-3") -
      this.getValueByCoordinate("B-5") -
      this.getValueByCoordinate("B-6") -
      this.getValueByCoordinate("B-7") -
      this.getValueByCoordinate("B-8") -
      this.getValueByCoordinate("B-9") -
      this.getValueByCoordinate("B-10") -
      this.getValueByCoordinate("B-11") -
      this.getValueByCoordinate("B-12") -
      this.getValueByCoordinate("B-13") -
      this.getValueByCoordinate("B-14");
    return result.toFixed(3);
  };

  getD15 = () => {
    // D3*B3+D4*B4+D5*B5+D6*B6+D7*B7+D8*B8
    return (
      (this.getValueByCoordinate("D-3") * this.getValueByCoordinate("B-3") +
        this.getValueByCoordinate("D-4") * this.getValueByCoordinate("B-4") +
        this.getValueByCoordinate("D-5") * this.getValueByCoordinate("B-5") +
        this.getValueByCoordinate("D-6") * this.getValueByCoordinate("B-6") +
        this.getValueByCoordinate("D-7") * this.getValueByCoordinate("B-7") +
        this.getValueByCoordinate("D-8") * this.getValueByCoordinate("B-8")) /
      100
    ).toFixed(4);
  };

  getC15 = () => {
    // C3 * B3 + B4 * C4 + C14 * B14 + C13 * B13;
    return (
      (this.getValueByCoordinate("C-3") * this.getValueByCoordinate("B-3") +
        this.getValueByCoordinate("B-4") * this.getValueByCoordinate("C-4") +
        this.getValueByCoordinate("C-14") * this.getValueByCoordinate("B-14") +
        this.getValueByCoordinate("C-13") * this.getValueByCoordinate("B-13")) /
      100
    ).toFixed(4);
  };

  getI13 = () => {
    return (
      (this.getValueByCoordinate("B-13") *
        (1 - this.getValueByCoordinate("C-13"))) /
      (1 - this.getValueByCoordinate("C-15")) /
      100
    ).toFixed(5);
  };

  getB12 = () => {
    return (
      this.getValueByCoordinate("H-12") / this.getValueByCoordinate("F-12")
    ).toFixed(3);
  };

  getB11 = () => {
    return (
      this.getValueByCoordinate("H-11") / this.getValueByCoordinate("F-11")
    ).toFixed(3);
  };

  getB10 = () => {
    return (
      this.getValueByCoordinate("H-10") / this.getValueByCoordinate("F-10")
    ).toFixed(3);
  };

  getB9 = () => {
    return (
      this.getValueByCoordinate("H-9") / this.getValueByCoordinate("F-9")
    ).toFixed(3);
  };

  getG8 = () => {
    return (
      this.getValueByCoordinate("D-8") /
      60 /
      (this.getValueByCoordinate("E-8") / 102)
    ).toFixed(2);
  };

  getB7 = () => {
    return (
      this.getValueByCoordinate("H-7") / this.getValueByCoordinate("F-7")
    ).toFixed(3);
  };

  getG6 = () => {
    return (
      this.getValueByCoordinate("D-6") /
      60 /
      (this.getValueByCoordinate("E-6") / 102)
    ).toFixed(3);
  };

  getG5 = () => {
    return (
      this.getValueByCoordinate("D-5") /
      60 /
      (this.getValueByCoordinate("E-5") / 102)
    ).toFixed(3);
  };

  getG3 = () => {
    return (
      this.getValueByCoordinate("D-3") /
      60 /
      (this.getValueByCoordinate("E-3") / 102)
    ).toFixed(3);
  };

  setValueByCoordinate = (coordinate, value) => {
    const [col, row] = coordinate.split("-");
    const {dataSource = []} = this.state || {};
    dataSource[row - 3][col] = value;
    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  getValueByCoordinate = value => {
    // 为了和模型想匹配, 估做 row 差值
    const [col, row] = value.split("-");
    const {dataSource = []} = this.state || {};
    return parseFloat(dataSource[row - 3][col]);
  };

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({dataSource: dataSource.filter(item => item.key !== key)});
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    console.log("row", row);

    const index = newData.findIndex(item => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({dataSource: newData}, this.countValue);
  };

  render() {
    const {dataSource} = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <Card title="高岭土矿物成分预估计算" extra={<Link to="/">返回</Link>}>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          scroll={{x: 860, y: 600}}
          bordered
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
      </Card>
    );
  }
}
