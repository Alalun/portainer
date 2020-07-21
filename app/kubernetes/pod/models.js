/**
 * KubernetesPod Model
 */
const _KubernetesPod = Object.freeze({
  Id: '',
  Name: '',
  Namespace: '',
  Images: [],
  Status: '',
  Restarts: 0,
  Node: '',
  CreationDate: '',
  Containers: [],
  Labels: [],
  Affinity: {}, // KubernetesPodAffinity
  Tolerations: [], // KubernetesPodToleration[]
});

export class KubernetesPod {
  constructor() {
    Object.assign(this, JSON.parse(JSON.stringify(_KubernetesPod)));
  }
}


/**
 * KubernetesPodAffinity Model
 */
const _KubernetesPodAffinity = Object.freeze({
  Node: [],
  Pod: [],
  PodAnti: [],
});

export class KubernetesPodAffinity {
  constructor() {
    Object.assign(this, JSON.parse(JSON.stringify(_KubernetesPodAffinity)));
  }
}

/**
 * KubernetesPodNodeAffinity Model
 */
const _KubernetesPodNodeAffinity = Object.freeze({
  preferredDuringSchedulingIgnoredDuringExecution: [],
  requiredDuringSchedulingIgnoredDuringExecution: {},
});

export class KubernetesPodNodeAffinity {
  constructor() {
    Object.assign(this, JSON.parse(JSON.stringify(_KubernetesPodNodeAffinity)));
  }
}

/**
 * KubernetesPodPodAffinity Model
 */
const _KubernetesPodPodAffinity = Object.freeze({
  preferredDuringSchedulingIgnoredDuringExecution: [],
  requiredDuringSchedulingIgnoredDuringExecution: [],
});

export class KubernetesPodPodAffinity {
  constructor() {
    Object.assign(this, JSON.parse(JSON.stringify(_KubernetesPodPodAffinity)));
  }
}

/**
 * KubernetesPodPodAntiAffinity Model
 */
const _KubernetesPodPodAntiAffinity = Object.freeze({
  preferredDuringSchedulingIgnoredDuringExecution: [],
  requiredDuringSchedulingIgnoredDuringExecution: [],
});

export class KubernetesPodPodAntiAffinity {
  constructor() {
    Object.assign(this, JSON.parse(JSON.stringify(_KubernetesPodPodAntiAffinity)));
  }
}

/**
 * KubernetesPodToleration Model
 */
const _KubernetesPodToleration = Object.freeze({
  Key: '',
  Operator: '',
  Value: '',
  TolerationSeconds: 0,
  Effect: '',
});

export class KubernetesPodToleration {
  constructor() {
    Object.assign(this, JSON.parse(JSON.stringify(_KubernetesPodToleration)));
  }
}