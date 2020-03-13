import React, {Component} from "react";
import {InputNumber, Form} from "antd";
import "./Editable.less";

const EditableContext = React.createContext();

const EditableRow = ({form, index, ...props}) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

export const EditableFormRow = Form.create()(EditableRow);

export class EditableCell extends Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({editing}, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const {record, handleSave} = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({...record, ...values});
    });
  };

  renderCell = form => {
    this.form = form;
    const {children, dataIndex, record, title} = this.props;
    const {editing} = this.state;
    return editing ? (
      <Form.Item style={{margin: 0}}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title}不得为空`,
            },
          ],
          initialValue: record[dataIndex],
        })(
          <InputNumber
            min={0}
            max={100}
            step={0.001}
            type="number"
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />,
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{paddingRight: 24}}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}
