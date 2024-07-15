"use client";
import { useState } from "react";
import { saveAs } from "file-saver";

interface Compartment {
  codeId: string;
  humanReadableId: string;
  sensorAreaExternalIds: string[];
}

interface Sensor {
  sensorUnitHardwareId: string;
  pinId: string;
}

interface SensorArea {
  externalId: string;
  sensors: Sensor[];
}

interface FormData {
  codeId: string;
  humanReadableId: string;
  modelExternalId: string;
  hardwareVersion: string;
  retailerExternalId: string;
  activated: boolean;
  hardwareId: string;
  bluetoothId: string;
  compartments: Compartment[];
  sensorAreas: SensorArea[];
}

const XmlForm = () => {
  const [formData, setFormData] = useState<FormData>({
    codeId: "",
    humanReadableId: "",
    modelExternalId: "",
    hardwareVersion: "",
    retailerExternalId: "",
    activated: false,
    hardwareId: "",
    bluetoothId: "",
    compartments: [
      { codeId: "", humanReadableId: "", sensorAreaExternalIds: [""] },
    ],
    sensorAreas: [
      { externalId: "", sensors: [{ sensorUnitHardwareId: "", pinId: "" }] },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section?: keyof FormData,
    index?: number,
    subIndex?: number
  ) => {
    const { name, value, type, checked } = e.target;

    if (section) {
      if (section === "compartments" || section === "sensorAreas") {
        const updatedSection = formData[section].map((item, i) => {
          if (i === index) {
            if (subIndex !== undefined && item.hasOwnProperty(name)) {
              const currentItem = item as any;

              if (Array.isArray(currentItem[name])) {
                currentItem[name][subIndex] = value;
              } else {
                currentItem[name] = type === "checkbox" ? checked : value;
              }
            } else {
              (item as any)[name] = type === "checkbox" ? checked : value;
            }
          }
          return item;
        });
        setFormData({ ...formData, [section]: updatedSection });
      } else {
        console.error("Attempted to update a non-array section");
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const addCompartment = () => {
    setFormData({
      ...formData,
      compartments: [
        ...formData.compartments,
        { codeId: "", humanReadableId: "", sensorAreaExternalIds: [""] },
      ],
    });
  };

  const addSensorArea = () => {
    setFormData({
      ...formData,
      sensorAreas: [
        ...formData.sensorAreas,
        { externalId: "", sensors: [{ sensorUnitHardwareId: "", pinId: "" }] },
      ],
    });
  };

  const generateXML = () => {
    const xml = `
      <Import>
        <storageUnits>
          <storageUnit>
            <codeId>${formData.codeId}</codeId>
            <humanReadableId>${formData.humanReadableId}</humanReadableId>
            <modelExternalId>${formData.modelExternalId}</modelExternalId>
            <hardwareVersion>${formData.hardwareVersion}</hardwareVersion>
            <retailerExternalId>${
              formData.retailerExternalId
            }</retailerExternalId>
            <activated>${formData.activated}</activated>
            <sensorUnits>
              <sensorUnit>
                <hardwareId>${formData.hardwareId}</hardwareId>
                <bluetoothId>${formData.bluetoothId}</bluetoothId>
              </sensorUnit>
            </sensorUnits>
          </storageUnit>
        </storageUnits>
        <compartments>
          ${formData.compartments
            .map(
              (compartment) => `
            <Compartment>
              <codeId>${compartment.codeId}</codeId>
              <storageUnitCodeId>${formData.codeId}</storageUnitCodeId>
              <humanReadableId>${compartment.humanReadableId}</humanReadableId>
              <sensorAreaExternalIds>
                ${compartment.sensorAreaExternalIds
                  .map(
                    (id) => `
                <Id>${id}</Id>
                `
                  )
                  .join("")}
              </sensorAreaExternalIds>
            </Compartment>
          `
            )
            .join("")}
        </compartments>
        <sensorAreas>
          ${formData.sensorAreas
            .map(
              (sensorArea) => `
            <SensorArea>
              <externalId>${sensorArea.externalId}</externalId>
              <sensors>
                ${sensorArea.sensors
                  .map(
                    (sensor) => `
                  <Sensor>
                    <sensorConnection>
                      <sensorUnitHardwareId>${sensor.sensorUnitHardwareId}</sensorUnitHardwareId>
                      <pinId>${sensor.pinId}</pinId>
                    </sensorConnection>
                  </Sensor>
                `
                  )
                  .join("")}
              </sensors>
            </SensorArea>
          `
            )
            .join("")}
        </sensorAreas>
      </Import>
    `;
    const blob = new Blob([xml], { type: "application/xml;charset=utf-8" });
    saveAs(blob, "data.xml");
  };

  return (
    <form className="space-y-4 p-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block">Code ID</label>
        <input
          className="border p-2"
          type="text"
          name="codeId"
          value={formData.codeId}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label className="block">Human Readable ID</label>
        <input
          className="border p-2"
          type="text"
          name="humanReadableId"
          value={formData.humanReadableId}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label className="block">Model External ID</label>
        <input
          className="border p-2"
          type="text"
          name="modelExternalId"
          value={formData.modelExternalId}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label className="block">Hardware Version</label>
        <input
          className="border p-2"
          type="text"
          name="hardwareVersion"
          value={formData.hardwareVersion}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label className="block">Retailer External ID</label>
        <input
          className="border p-2"
          type="text"
          name="retailerExternalId"
          value={formData.retailerExternalId}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label className="block">Activated</label>
        <input
          type="checkbox"
          name="activated"
          checked={formData.activated}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label className="block">Hardware ID</label>
        <input
          className="border p-2"
          type="text"
          name="hardwareId"
          value={formData.hardwareId}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label className="block">Bluetooth ID</label>
        <input
          className="border p-2"
          type="text"
          name="bluetoothId"
          value={formData.bluetoothId}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* Compartments */}
      {formData.compartments.map((compartment, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-bold">Compartment {index + 1}</h3>
          <div>
            <label className="block">Compartment Code ID</label>
            <input
              className="border p-2"
              type="text"
              name="codeId"
              value={compartment.codeId}
              onChange={(e) => handleChange(e, "compartments", index)}
            />
          </div>
          <div>
            <label className="block">Compartment Human Readable ID</label>
            <input
              className="border p-2"
              type="text"
              name="humanReadableId"
              value={compartment.humanReadableId}
              onChange={(e) => handleChange(e, "compartments", index)}
            />
          </div>
          <div>
            <label className="block">Sensor Area External IDs</label>
            {compartment.sensorAreaExternalIds.map((id, idIndex) => (
              <input
                key={idIndex}
                className="border p-2 mb-2 block"
                type="text"
                name="sensorAreaExternalIds"
                value={id}
                onChange={(e) =>
                  handleChange(e, "compartments", index, idIndex)
                }
              />
            ))}
          </div>
        </div>
      ))}
      <button
        className="bg-green-500 text-white p-2 rounded"
        type="button"
        onClick={addCompartment}
      >
        Add Compartment
      </button>

      {/* Sensor Areas */}
      {formData.sensorAreas.map((sensorArea, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-bold">Sensor Area {index + 1}</h3>
          <div>
            <label className="block">Sensor Area External ID</label>
            <input
              className="border p-2"
              type="text"
              name="externalId"
              value={sensorArea.externalId}
              onChange={(e) => handleChange(e, "sensorAreas", index)}
            />
          </div>
          {sensorArea.sensors.map((sensor, sensorIndex) => (
            <div key={sensorIndex} className="border p-2 rounded mb-2">
              <div>
                <label className="block">Sensor Unit Hardware ID</label>
                <input
                  className="border p-2"
                  type="text"
                  name="sensorUnitHardwareId"
                  value={sensor.sensorUnitHardwareId}
                  onChange={(e) =>
                    handleChange(e, "sensorAreas", index, sensorIndex)
                  }
                />
              </div>
              <div>
                <label className="block">Pin ID</label>
                <input
                  className="border p-2"
                  type="text"
                  name="pinId"
                  value={sensor.pinId}
                  onChange={(e) =>
                    handleChange(e, "sensorAreas", index, sensorIndex)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      ))}
      <button
        className="bg-green-500 text-white p-2 rounded"
        type="button"
        onClick={addSensorArea}
      >
        Add Sensor Area
      </button>

      <button
        className="bg-blue-500 text-white p-2 rounded"
        type="button"
        onClick={generateXML}
      >
        Generate XML
      </button>
    </form>
  );
};

export default XmlForm;
