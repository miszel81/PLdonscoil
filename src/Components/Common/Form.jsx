import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../Common/Input";
import TextArea from "../Common/TextArea";
import Datepicker from "./DatePicker";
import storage from "../../Firebase/index";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });

    if (!result.error) return null;

    const errors = {};

    let item;

    for (item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateNoBank = () => {
    const result = Joi.validate(this.state.data, this.schemaNoBank, {
      abortEarly: false
    });

    if (!result.error) return null;

    const errors = {};

    let item;

    for (item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    // check for errors before submitting form
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    // action after submiting form
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    // validate a field on change
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    // update the state
    this.setState({ data, errors });
  };

  handleDate = date => {
    const data = { ...this.state.data };
    data.deadline = date;
    this.setState({ data });
  };

  handleCheckBoxChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.checked;
    this.setState({ data });
  };

  handleCountyMultiSelect = e => {
    const data = { ...this.state.data };
    if (!data["reach"].includes(e.currentTarget.value)) {
      data["reach"].push(e.currentTarget.value);
      this.setState({ data });
    }
  };

  handleCategorySelect = e => {
    const data = { ...this.state.data };
    data.category = e.currentTarget.value;
    this.setState({ data });
  };

  handleDeselectCounty = county => {
    const data = { ...this.state.data };
    data.reach = this.state.data.reach.filter(c => c !== county);
    this.setState({ data });
  };

  // image upload to firebase
  handleFileChange = e => {
    // console.log(e.target.files[0].type);
    // console.log(e.target.files[0].size);
    // const data = { ...this.state.data };
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ image });
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const data = { ...this.state.data };
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            data.imgUrl = url;
            this.setState({ data });
          });
      }
    );
  };

  handleRemoveImage = () => {
    const data = { ...this.state.data };
    data.imgUrl = "";
    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-info"
        style={{ fontSize: "1.5rem" }}
        data-toggle="tooltip"
        title={this.validate() ? "Some required fields are missing" : null}
      >
        {label}
      </button>
    );
  }
  renderButton2(label) {
    return (
      <button
        disabled={this.validateNoBank()}
        type="submit"
        className="btn btn-info"
        style={{ fontSize: "1.5rem" }}
        data-toggle="tooltip"
        title={
          this.validateNoBank() ? "Some required fields are missing" : null
        }
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type, placeholder) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        onChange={this.handleChange}
        value={data[name]}
        type={type}
        placeholder={placeholder}
        error={errors[name]}
      />
    );
  }

  renderDate(name, label) {
    const { data, errors } = this.state;
    return (
      <Datepicker
        name={name}
        label={label}
        onChange={this.handleDate}
        selected={data.deadline}
        error={errors[name]}
        className="form-control"
      />
    );
  }

  renderTextArea(name, label, placeholder) {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        label={label}
        onChange={this.handleChange}
        value={data[name]}
        placeholder={placeholder}
        error={errors[name]}
      />
    );
  }
}

export default Form;
