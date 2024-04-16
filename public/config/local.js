window.config = {
  // This must match the location configured for web server
  path: '/',
  servers: [
    {
      id: 'local',
      // This must match the proxy location configured for the web server
      url: 'http://172.16.20.185:8080/pacs/rest/MINERVA',

      // url: 'http://localhost:8043/pacs/rest/MINERVA',

      write: true
    }
  ],
  disableWorklist: false,
  disableAnnotationTools: false,
  mode: 'light',
  preload: true,
  annotations: [
    {
      finding: {
        value: '85756007',
        schemeDesignator: 'SCT',
        meaning: 'Tissue'
      },
      findingCategory: {
        value: '91723000',
        schemeDesignator: 'SCT',
        meaning: 'Anatomical structure'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [255, 255, 0, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    },
    {
      finding: {
        value: '108369006',
        schemeDesignator: 'SCT',
        meaning: 'Tumor'
      },
      findingCategory: {
        value: '49755003',
        schemeDesignator: 'SCT',
        meaning: 'Morphologically abnormal structure'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [255, 0, 255, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    },
    {
      finding: {
        value: '34823008',
        schemeDesignator: 'SCT',
        meaning: 'Tumor necrosis'
      },
      findingCategory: {
        value: '49755003',
        schemeDesignator: 'SCT',
        meaning: 'Morphologically abnormal structure'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [51, 204, 51, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    },
    {
      finding: {
        value: '369705002',
        schemeDesignator: 'SCT',
        meaning: 'Invasive tumor border'
      },
      findingCategory: {
        value: '395557000',
        schemeDesignator: 'SCT',
        meaning: 'Tumor finding'
      },
      geometryTypes: ['line', 'freehandline'],
      style: {
        stroke: {
          color: [51, 102, 255, 1],
          lineDash: [10, 10],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      },
      style: {
        stroke: {
          color: [51, 204, 204, 1],
          lineDash: [10, 10],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        },
        text: {
          font: 'bold 12px sans-serif',
          textAlign: 'start',
          justify: 'left',
          text:``,
          textBaseline: 'top',
          placement: 'line',
          fill: {
            color: [0, 0, 255, 0.8],
          },
          backgroundFill: {
            color: [168, 50, 153, 0],
          },
          padding: [0, 0, 0, 0],
        },
      }
    },
    {
      finding: {
        value: '399721002',
        schemeDesignator: 'SCT',
        meaning: 'Tumor infiltration by lymphocytes present'
      },
      findingCategory: {
        value: '395557000',
        schemeDesignator: 'SCT',
        meaning: 'Tumor finding'
      },
      geometryTypes: ['box', 'polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [51, 204, 204, 1],
          lineDash: [10, 10],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        },
        text: {
          font: 'bold 12px sans-serif',
          textAlign: undefined,
          justify: 'left',
          text:``,
          fill: {
            color: [0, 0, 255, 0.8],
          },
          backgroundFill: {
            color: [168, 50, 153, 0.6],
          },
          padding: [0, 0, 0, 0],
        },
      }
    },
    {
      finding: {
        value: '47973001',
        schemeDesignator: 'SCT',
        meaning: 'Artifact'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [255, 80, 80, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    }
  ]
}
