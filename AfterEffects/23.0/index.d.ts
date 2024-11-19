/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

/**
 * The global System object.
 */
declare var system: System

declare interface _AppVersion {
  CS3: 8.0
  CS4: 9.0
  CS5: 10.0
  CS5_5: 10.5
  CS6: 11.0
  CC: 12.0
  CC2014: 13.0
  CC2015: 13.5
  CC2015_1: 13.6
  CC2015_2: 13.7
  CC2015_3: 13.8
  CC2017: 14.0
  CC2018: 15.0
  CC2019: 16.0
  CC2020: 17.0
}

declare const enum _CommandID {
  /**
   * File
   */
  NewProject = 2,
  NewFolder = 2139,
  NewAdobePhotoshopFile = 3147,
  NewMAXONCINEMA4DFile = 4007,
  OpenProject = 3,
  OpenRecentProject1 = 2330,
  OpenRecentProject2 = 2331,
  OpenRecentProject3 = 2332,
  OpenRecentProject4 = 2333,
  OpenRecentProject5 = 2334,
  BrowseInBridge = 3689,

  Close = 4,
  CloseProject = 3154,
  Save = 5,
  SaveAs = 6,
  SaveACopy = 2166,
  SaveACopyAsXML = 3785,
  IncrementAndSave = 3088,
  Revert = 7,

  ImportFile = 2003,
  ImportMultipleFiles = 2236,
  ImportPlaceholder = 2126,
  ImportSolid = 3000,
  ImportRecentFootage1 = 2310,
  ImportRecentFootage2 = 2311,
  ImportRecentFootage3 = 2312,
  ImportRecentFootage4 = 2313,
  ImportRecentFootage5 = 2314,
  ImportRecentFootage6 = 2315,
  ImportRecentFootage7 = 2316,
  ImportRecentFootage8 = 2317,
  ImportRecentFootage9 = 2318,
  ImportRecentFootage10 = 2319,
  ExportAddToAdobeMediaEncoderQueue = 3800,
  ExportAddToRenderQueue = 2161,

  AddFootageToComp = 2005,
  NewCompFromSelection = 2796,

  CollectFiles = 2482,
  ConsolidateAllFootage = 2107,
  RemoveUnusedFootage = 2109,
  ReduceProject = 2735,
  FindMissingEffects = 4002,
  FindMissingFonts = 4003,
  FindMissingFootage = 4004,
  WatchFolder = 2457,

  RunScriptFile = 8000,
  OpenScriptEditor = 8001,

  CreateProxyStill = 2778,
  CreateProxyMovie = 2779,
  SetProxyFile = 2003,
  SetProxyNone = 2119,
  InterpretFootageMain = 2077,
  InterpretFootageProxy = 2103,
  InterpretFootageRememberInterpretation = 2254,
  InterpretFootageApplyInterpretation = 2255,
  ReplaceFootageFile = 2003,
  ReplaceFootageWithLayeredComp = 3070,
  ReplaceFootagePlaceholder = 2126,
  ReplaceFootageSolid = 3000,
  ReloadFootage = 2257,
  RevealInExplorer = 2562,
  RevealInFinder = 2562,
  RevealInBridge = 3690,

  ProjectSettings = 2611,

  /**
   * Edit
   */
  Undo = 16,
  Redo = 2035,
  Redo2 = 17,

  Cut = 18,
  Copy = 19,
  CopyWithPropertyLinks = 10310,
  CopyExpressionOnly = 53,
  Paste = 20,
  Clear = 21,

  Duplicate = 2080,
  SplitLayer = 2158,
  LiftWorkArea = 2613,
  ExtractWorkArea = 2614,
  SelectAll = 23,
  DeselectAll = 2004,

  PurgeAllMemoryAndDiskCache = 10200,
  PurgeAllMemory = 2373,
  PurgeUndo = 2371,
  PurgeImageCacheMemory = 2372,
  PurgeSnapshot = 2481,

  EditOriginal = 2142,
  EditInAdobeAudition = 3697,

  TemplatesRenderSettings = 2149,
  TemplatesOutputModule = 2150,
  PasteMochaMask = 5006,

  /**
   * Composition
   */
  NewComposition = 2000,

  CompositionSettings = 2007,
  SetPosterTime = 2012,
  TrimCompToWorkArea = 2360,
  CropCompToRegionOfInterest = 2997,
  AddToAdobeMediaEncoderQueue = 3800,
  AddToRenderQueue = 2161,
  AddOutputModule = 2154,

  SaveFrameAs = 2233,
  SaveFrameAsPhotoshopLayers = 5001,
  PreRender = 2780,

  CompositionFlowchart = 2258,
  CompositionMiniFlowchart = 3792,

  /**
   * Layer
   */
  NewText = 2836,
  NewSolid = 2038,
  NewLight = 2563,
  NewCamera = 2564,
  NewNullObject = 2767,
  NewShapeLayer = 3736,
  NewAdjustmentLayer = 2279,
  // NewAdobePhotoshopFile = 3147,
  // NewMAXONCINEMA4DFile = 4007,
  LayerSettings = 2021,

  OpenLayer = 3784,
  OpenLayerSource = 2523,
  // RevealInExplorer = 2562,
  // RevealInFinder = 2562,

  NewMask = 2367,
  ResetMask = 2448,
  RemoveMask = 2368,
  RemoveAllMasks = 2369,
  UnlockAllMasks = 2456,
  LockOtherMasks = 2455,
  HideLockedMasks = 2524,

  QualityBest = 2045,
  QualityDraft = 2044,
  QualityWireframe = 2042,
  QualityBilinear = 10207,
  QualityBicubic = 10208,

  HideOtherVideo = 2054,
  ShowAllVideo = 2055,
  UnlockAllLayers = 2244,

  FlipHorizontal = 3766,
  FlipVertical = 3767,
  CenterInView = 3819,
  CenterAnchorPointInLayerContent = 10312,
  FitToComp = 2156,
  FitToCompWidth = 2732,
  FitToCompHeight = 2733,
  EnableTimeRemapping = 2153,
  TimeReverseLayer = 2135,
  TimeStretch = 2024,
  FreezeFrame = 3695,
  AddMarker = 2157,

  LayerStylesConvertToEditableStyles = 3740,
  LayerStylesShowAll = 3743,
  LayerStylesRemoveAll = 2072,
  LayerStylesDropShadow = 9000,
  LayerStylesInnerShadow = 9001,
  LayerStylesOuterGlow = 9002,
  LayerStylesInnerGlow = 9003,
  LayerStylesBevelAndEmboss = 9004,
  LayerStylesSatin = 9005,
  LayerStylesColorOverlay = 9006,
  LayerStylesGradientOverlay = 9007,
  LayerStylesStroke = 9008,

  GroupShapes = 3741,
  UngroupShapes = 3742,

  ConvertToEditableText = 3799,
  CreateShapesFromText = 3781,
  CreateMasksFromText = 2933,
  CreateShapesFromVectorLayer = 3973,
  CreateStereo3DRig = 3843,
  CreateOrbitNull = 3844,
  LinkFocusDistanceToPointOfInterest = 3845,
  LinkFocusDistanceToLayer = 3847,
  SetFocusDistanceToLayer = 3846,
  AutoTrace = 3044,
  PreCompose = 2071,

  /**
   * Animation
   */
  SaveAnimationPreset = 3075,
  ApplyAnimationPreset = 2450,
  RecentAnimationPreset1 = 2460,
  RecentAnimationPreset2 = 2461,
  RecentAnimationPreset3 = 2462,
  RecentAnimationPreset4 = 2463,
  RecentAnimationPreset5 = 2464,
  BrowsePresets = 3691,

  ConvertAudioToKeyframes = 5015,
  ConvertExpressionToKeyframes = 2639,
  RPFCameraImport = 5018,
  SequenceLayers = 5003,
  TimeReverseKeyframes = 3693,

  RemoveAllTextAnimators = 3058,

  AddExpression = 2702,
  SeparateDimensions = 3764,
  TrackCamera = 3983,
  TrackInMochaAE = 5007,
  WarpStabilizerVFX = 3986,
  TrackMotion = 2568,
  TrackMask = 10311,
  TrackThisProperty = 2643,

  RevealPropertiesWithKeyframes = 2387,
  RevealPropertiesWithAnimation = 4011,
  RevealAllModifiedProperties = 2771,

  /**
   * View
   */
  ZoomIn = 2092,
  ZoomOut = 2093,

  ResolutionFull = 2048,
  ResolutionHalf = 2047,
  ResolutionThird = 2081,
  ResolutionQuarter = 2046,
  ResolutionCustom = 2049,

  UseDisplayColorManagement = 3704,

  ShowRulers = 2280,

  ShowGuides = 2274,
  SnapToGuides = 2286,
  LockGuides = 2275,
  ClearGuides = 2276,

  ShowGrid = 2277,
  SnapToGrid = 2278,

  ShowLayerControls = 2435,

  /**
   * Window
   */
  Align = 5022,
  Audio = 2029,
  Brushed = 3014,
  Character = 3011,
  EffectsAndPresets = 3718,
  Info = 2028,
  MaskInterpolation = 5027,
  MediaBrowser = 4013,
  Metadata = 3788,
  MotionSketch = 5024,
  Paint = 3045,
  Paragraph = 3012,
  Preview = 2031,
  Progress = 4005,
  Smoother = 5028,
  Tools = 2010,
  Tracker = 5005,
  Wiggler = 5030,
}

declare enum AlphaMode {
  IGNORE = 5413,
  PREMULTIPLIED = 5414,
  STRAIGHT = 5412,
}

declare enum AutoOrientType {
  /** Layer faces in the direction of the motion path. */
  ALONG_PATH = 4213,

  /** Layer always faces the active camera or points at its point of interest. */
  CAMERA_OR_POINT_OF_INTEREST = 4214,

  /** Each character in a per-character 3D text layer automatically faces the active camera. */
  CHARACTERS_TOWARD_CAMERA = 4215,

  /** Layer rotates freely, independent of any motion path, point of interest, or other layers. */
  NO_AUTO_ORIENT = 4212,
}

declare enum BlendingMode {
  ADD = 5220,
  ALPHA_ADD = 5244,
  CLASSIC_COLOR_BURN = 5219,
  CLASSIC_COLOR_DODGE = 5225,
  CLASSIC_DIFFERENCE = 5234,
  COLOR = 5238,
  COLOR_BURN = 5218,
  COLOR_DODGE = 5224,
  DANCING_DISSOLVE = 5214,
  DARKEN = 5215,
  DARKER_COLOR = 5247,
  DIFFERENCE = 5233,
  DISSOLVE = 5213,
  DIVIDE = 5249,
  EXCLUSION = 5235,
  HARD_LIGHT = 5228,
  HARD_MIX = 5232,
  HUE = 5236,
  LIGHTEN = 5221,
  LIGHTER_COLOR = 5246,
  LINEAR_BURN = 5217,
  LINEAR_DODGE = 5223,
  LINEAR_LIGHT = 5229,
  LUMINESCENT_PREMUL = 5245,
  LUMINOSITY = 5239,
  MULTIPLY = 5216,
  NORMAL = 5212,
  OVERLAY = 5226,
  PIN_LIGHT = 5231,
  SATURATION = 5237,
  SCREEN = 5222,
  SILHOUETE_ALPHA = 5242,
  SILHOUETTE_LUMA = 5243,
  SOFT_LIGHT = 5227,
  STENCIL_ALPHA = 5240,
  STENCIL_LUMA = 5241,
  SUBTRACT = 5248,
  VIVID_LIGHT = 5230,
}

declare enum ChannelType {
  CHANNEL_ALPHA = 7816,
  CHANNEL_ALPHA_BOUNDARY = 7822,
  CHANNEL_ALPHA_OVERLAY = 7821,
  CHANNEL_BLUE = 7815,
  CHANNEL_BLUE_COLORIZE = 7819,
  CHANNEL_GREEN = 7814,
  CHANNEL_GREEN_COLORIZE = 7818,
  CHANNEL_RED = 7813,
  CHANNEL_RED_COLORIZE = 7817,
  CHANNEL_RGB = 7812,
  CHANNEL_RGB_STRAIGHT = 7820,
}

declare enum CloseOptions {
  /** Close without saving. */
  DO_NOT_SAVE_CHANGES = 1212,

  /** Prompt for whether to save changes before close. */
  PROMPT_TO_SAVE_CHANGES = 1213,

  /** Save automatically on close. */
  SAVE_CHANGES = 1214,
}

declare enum FastPreviewType {
  FP_ADAPTIVE_RESOLUTION = 8013,
  FP_DRAFT = 8014,
  FP_FAST_DRAFT = 8015,
  FP_OFF = 8012,
  FP_WIREFRAME = 8016,
}

declare enum FeetFramesFilmType {
  MM16 = 2412,
  MM35 = 2413,
}

declare enum FieldSeparationType {
  LOWER_FIELD_FIRST = 5614,
  OFF = 5613,
  UPPER_FIELD_FIRST = 5612,
}

declare enum FootageTimecodeDisplayStartType {
  FTCS_START_0 = 2213,
  FTCS_USE_SOURCE_MEDIA = 2212,
}

declare enum FrameBlendingType {
  FRAME_MIX = 4013,
  NO_FRAME_BLEND = 4012,
  PIXEL_MOTION = 4014,
}

declare enum FramesCountType {
  FC_START_0 = 2612,
  FC_START_1 = 2613,
  FC_TIMECODE_CONVERSION = 2614,
}

declare enum GetSettingsFormat {
  NUMBER = 3413,
  NUMBER_SETTABLE = 3414,
  SPEC = 3412,
  STRING = 3415,
  STRING_SETTABLE = 3416,
}

declare enum GpuAccelType {
  CUDA = 1813,
  METAL = 1814,
  OPENCL = 1812,
  SOFTWARE = 1816,
  VULKAN = 1815,
}

declare enum ImportAsType {
  COMP = 3814,
  COMP_CROPPED_LAYERS = 3812,
  FOOTAGE = 3813,
  PROJECT = 3815,
}

declare enum KeyframeInterpolationType {
  BEZIER = 6613,
  HOLD = 6614,
  LINEAR = 6612,
}

declare enum Language {
  CHINESE = 1619,
  ENGLISH = 1612,
  FRENCH = 1615,
  GERMAN = 1614,
  ITALIAN = 1616,
  JAPANESE = 1613,
  KOREAN = 1618,
  PORTUGUESE = 1621,
  RUSSIAN = 1620,
  SPANISH = 1617,
}

declare enum LayerQuality {
  BEST = 4614,
  DRAFT = 4613,
  WIREFRAME = 4612,
}

declare enum LayerSamplingQuality {
  BICUBIC = 4813,
  BILINEAR = 4812,
}

declare enum LightType {
  AMBIENT = 4415,
  PARALLEL = 4412,
  POINT = 4414,
  SPOT = 4413,
}

declare enum LogType {
  ERRORS_AND_PER_FRAME_INFO = 3214,
  ERRORS_AND_SETTINGS = 3213,
  ERRORS_ONLY = 3212,
}

declare enum MaskFeatherFalloff {
  FFO_LINEAR = 7213,
  FFO_SMOOTH = 7212,
}

declare enum MaskMode {
  ADD = 6813,
  DARKEN = 6817,
  DIFFERENCE = 6818,
  INTERSECT = 6815,
  LIGHTEN = 6816,
  NONE = 6812,
  SUBTRACT = 6814,
}

declare enum MaskMotionBlur {
  OFF = 7014,
  ON = 7013,
  SAME_AS_LAYER = 7012,
}

declare enum ParagraphJustification {
  CENTER_JUSTIFY = 7415,
  FULL_JUSTIFY_LASTLINE_CENTER = 7418,
  FULL_JUSTIFY_LASTLINE_FULL = 7419,
  FULL_JUSTIFY_LASTLINE_LEFT = 7416,
  FULL_JUSTIFY_LASTLINE_RIGHT = 7417,
  LEFT_JUSTIFY = 7413,
  MULTIPLE_JUSTIFICATIONS = 7412,
  RIGHT_JUSTIFY = 7414,
}

declare enum PostRenderAction {
  IMPORT = 3613,
  IMPORT_AND_REPLACE_USAGE = 3614,
  NONE = 3612,
  SET_PROXY = 3615,
}

declare enum PREFType {
  PREF_Type_MACHINE_INDEPENDENT = 8813,
  PREF_Type_MACHINE_INDEPENDENT_COMPOSITION = 8816,
  PREF_Type_MACHINE_INDEPENDENT_OUTPUT = 8815,
  PREF_Type_MACHINE_INDEPENDENT_RENDER = 8814,
  PREF_Type_MACHINE_SPECIFIC = 8812,
  PREF_Type_MACHINE_SPECIFIC_PAINT = 8818,
  PREF_Type_MACHINE_SPECIFIC_TEXT = 8817,
}

declare enum PropertyType {
  INDEXED_GROUP = 6214,
  NAMED_GROUP = 6213,
  PROPERTY = 6212,
}

declare enum PropertyValueType {
  COLOR = 6418,
  CUSTOM_VALUE = 6419,
  LAYER_INDEX = 6421,
  MARKER = 6420,
  MASK_INDEX = 6422,
  NO_VALUE = 6412,
  OneD = 6417,
  SHAPE = 6423,
  TEXT_DOCUMENT = 6424,
  ThreeD = 6414,
  ThreeD_SPATIAL = 6413,
  TwoD = 6416,
  TwoD_SPATIAL = 6415,
}

declare enum PulldownMethod {
  ADVANCE_24P = 6013,
  PULLDOWN_3_2 = 6012,
}

declare enum PulldownPhase {
  OFF = 5813,
  SSWWW = 5814,
  SWWWS = 5815,
  SWWWW_24P_ADVANCE = 5821,
  WSSWW = 5812,
  WSWWW_24P_ADVANCE = 5820,
  WWSSW = 5817,
  WWSWW_24P_ADVANCE = 5819,
  WWWSS = 5816,
  WWWSW_24P_ADVANCE = 5818,
  WWWWS_24P_ADVANCE = 5822,
}

declare enum PurgeTarget {
  /** Purges all data that After Effects has cached to physical memory. */
  ALL_CACHES = 1412,

  /** Purges all saved image data. */
  IMAGE_CACHES = 1415,

  /** Purges all data cached as composition/layer snapshots. */
  SNAPSHOT_CACHES = 1414,

  /** Purges all data saved in the undo cache. */
  UNDO_CACHES = 1413,
}

declare enum ResolveType {
  ACCEPT_THEIRS = 8612,
  ACCEPT_THEIRS_AND_COPY = 8613,
  ACCEPT_YOURS = 8614,
}

declare enum RQItemStatus {
  DONE = 3019,
  ERR_STOPPED = 3018,
  NEEDS_OUTPUT = 3013,
  QUEUED = 3015,
  RENDERING = 3016,
  UNQUEUED = 3014,
  USER_STOPPED = 3017,
  WILL_CONTINUE = 3012,
}

declare enum SceneEditDetectionMode {
  MARKERS = 10012,
  SPLIT = 10013,
  SPLIT_PRECOMP = 10014,
  NONE = 10015,
}

declare enum TimeDisplayType {
  FRAMES = 2013,
  TIMECODE = 2012,
}

declare enum ToolType {
  Tool_Arrow = 9012,
  Tool_CameraDollyCamera = 9017,
  Tool_CameraDollyToCursor = 9048,
  Tool_CameraDollyTowardsCursor = 9047,
  Tool_CameraMaya = 9014,
  Tool_CameraOrbit = 9015,
  Tool_CameraOrbitCamera = 9015,
  Tool_CameraOrbitCursor = 9044,
  Tool_CameraOrbitScene = 9045,
  Tool_CameraPanCamera = 9016,
  Tool_CameraPanCursor = 9046,
  Tool_CameraTrackXY = 9016,
  Tool_CameraTrackZ = 9017,
  Tool_CloneStamp = 9019,
  Tool_Eraser = 9020,
  Tool_Feather = 9032,
  Tool_Hairbrush = 9042,
  Tool_Hand = 9021,
  Tool_Magnify = 9022,
  Tool_Oval = 9026,
  Tool_Paintbrush = 9018,
  Tool_PanBehind = 9023,
  Tool_Pen = 9031,
  Tool_PenConvert = 9035,
  Tool_PenMinus = 9034,
  Tool_PenPlus = 9033,
  Tool_Pin = 9036,
  Tool_PinAdvanced = 9043,
  Tool_PinBend = 9038,
  Tool_PinDepth = 9040,
  Tool_PinStarch = 9037,
  Tool_Polygon = 9027,
  Tool_Quickselect = 9041,
  Tool_Rect = 9024,
  Tool_Rotate = 9013,
  Tool_RoundedRect = 9025,
  Tool_Star = 9028,
  Tool_TextH = 9029,
  Tool_TextV = 9030,
}

declare enum TrackMatteType {
  ALPHA = 5013,
  ALPHA_INVERTED = 5014,
  LUMA = 5015,
  LUMA_INVERTED = 5016,
  NO_TRACK_MATTE = 5012,
}

declare enum ViewerType {
  VIEWER_COMPOSITION = 7612,
  VIEWER_FOOTAGE = 7614,
  VIEWER_LAYER = 7613,
}

/**
 * TYPES
 */
type _PropertyClasses = Property | PropertyGroup | MaskPropertyGroup
type _ItemClasses = CompItem | FootageItem | FolderItem

/** Clears text from the Info panel. */
declare var clearOutput: () => void

/** Generates random numbers. */
declare var generateRandomNumber: () => number

/** Converts string time value to a numeric time value. */
declare var currentFormatToTime: (
  formattedTime: string,
  fps: number,
  isDuration?: boolean,
) => number

/** Converts a numeric time value to a string time value. */
declare var timeToCurrentFormat: (time: number, fps: number, isDuration?: boolean) => string

/** Writes text to the Info panel, with no line break added. */
declare var write: (text: string) => void

/** Writes text to the Info panel, adding a line break at the end. */
declare var writeLn: (text: string) => void

/** When true, the specified object exists. */
declare var isValid: (obj: object) => boolean

/** Provides access to objects and application settings within the After Effects application. The single global object is always available by its name, app. */
declare class Application {
  /** The current After Effects project. */
  readonly project: Project

  /** The version number of the After Effects application. */
  readonly version: string

  /** The name of this build of the application. */
  readonly buildName: string

  /** The number of this build of the application. */
  readonly buildNumber: number

  /** When true, the local application is running in Watch Folder mode. */
  readonly isWatchFolder: boolean

  /** When true, the local After Effects application is running as a render engine. */
  readonly isRenderEngine: boolean

  /** The language After Effects is running. */
  readonly language: Language

  /** Application settings that can be set via scripting. */
  readonly settings: Settings

  /** The locale (language and region) in which the application is running. */
  readonly isoLanguage: string

  /** Memory in use by this application. */
  readonly memoryInUse: number

  /** Preferences */
  readonly preferences: Preferences

  /** The currently focused or last-focused viewer panel. */
  readonly activeViewer: Viewer | null

  /** The effects available in the application. */
  readonly effects: { displayName: string; matchName: string; version: string; category: string }[]

  /** The Viewer object for the currently focused or active-focused viewer panel. */
  availableGPUAccelTypes: GpuAccelType

  /** Set to true to disable rendering as if Caps Lock were turned on. */
  disableRendering: boolean

  /** A callback function that is called when an error occurs in the application. */
  onError: string | null

  /** A numeric status code used when executing a script
   * externally (that is, from a command line or AppleScript).
   * 0 if no error occurred. A positive number indicates an
   * error that occurred while running the script.
   */
  exitCode: number

  /** When true, the application remains open after running a script from the command line on Windows. */
  exitAfterLaunchAndEval: boolean

  /** When true, the project is saved if the application closes unexpectedly. */
  saveProjectOnCrash: boolean

  /** Creates a new project in After Effects. */
  newProject(): Project | null

  /** Opens a project or an Open Project dialog box. */
  open(file?: File): Project | null

  /** Quits the application. */
  quit(): void

  /** Starts Watch Folder mode; does not return until Watch Folder mode is turned off. */
  watchFolder(folder_object_to_watch: Folder): void

  /** Pauses a current watch-folder process. */
  pauseWatchFolder(pause: boolean): void

  /** Ends a current watch-folder process. */
  endWatchFolder(): void

  /** Purges a targeted type of cached information(replicates Purge options in the Edit menu). */
  purge(target: PurgeTarget): void

  /** Groups the actions that follow it into a single undoable step. */
  beginUndoGroup(undoString: string): void

  /** Ends an undo group; needed only when a script contains more than one undo group. */
  endUndoGroup(): void

  /** Begins suppression of dialogs in the user interface. */
  beginSuppressDialogs(): void

  /** Ends suppression of dialogs in the user interface. */
  endSuppressDialogs(alert: boolean): void

  /** Sets memory usage limits as in the Memory & Cache preferences area. */
  setMemoryUsageLimits(imageCachePercentage: number, maximumMemoryPercentage: number): void

  /**
   * Set the Multi-Frame Rendering configuration for the next render
   *
   * @param use_mfr Set to `true` to enable Multi-Frame Rendering.
   * @param max_cpu_perc Value from 1-100 representing the maximum CPU percentage Multi-Frame Rendering should utilize. If `mfr_on` is set to `false`, pass in 100.
   */
  setMultiFrameRenderingConfig(use_mfr: boolean, max_cpu_percent: number): void

  /** Sets whether preferences are saved when the application is quit. */
  setSavePreferencesOnQuit(doSave: boolean): void

  /** Brings the After Effects main window to the front of the screen. */
  activate(): void

  /** Schedules a JavaScript script for delayed execution. */
  scheduleTask(stringToExecute: string, delay: number, repeat: boolean): number

  /** Cancels a scheduled task. */
  cancelTask(taskID: number): void

  /** Loads a color swatch from an Adobe Swatch Exchange (ASE) file. */
  parseSwatchFile(file: File): _Swatch

  findMenuCommandId(str: string): number

  executeCommand(id: number): void

  /** CC2015- */
  getenv(name: string): string
  setTimeout(func: () => void, delay?: number): number
  cancelTimeout(id: number): void
}

declare class Preferences {
  deletePref(section: string, key: string, type?: PREFType): void
  getPrefAsBool(section: string, key: string, type?: PREFType): boolean
  getPrefAsFloat(section: string, key: string, type?: PREFType): number
  getPrefAsLong(section: string, key: string, type?: PREFType): number
  getPrefAsString(section: string, key: string, type?: PREFType): string
  havePref(section: string, key: string, type?: PREFType): boolean
  reload(): void
  savePrefAsBool(section: string, key: string, value: boolean, type?: PREFType): void
  savePrefAsFloat(section: string, key: string, value: number, type?: PREFType): void
  savePrefAsLong(section: string, key: string, value: number, type?: PREFType): void
  savePrefAsString(section: string, key: string, value: string, type?: PREFType): void
  saveToDisk(): void
}

/** The AVItem object provides access to attributes and methods of audio/visual files imported into After Effects. */
declare class AVItem extends Item {
  /** The FootageItem object used as proxy for the item. */
  readonly proxySource: FootageSource

  /** The CompItem objects that use this item. */
  readonly usedIn: CompItem[]

  /** When true, the item has a video component. */
  readonly hasVideo: boolean

  /** When true, the item has an audio component. */
  readonly hasAudio: boolean

  /** When true, the item cannot be found or is a placeholder. */
  readonly footageMissing: boolean

  /** True if the AVItem can be used as an alternate source when calling Property.setAlternateSource */
  readonly isMediaReplacementCompatible: boolean

  /** The width of the item. */
  width: number

  /** The height of the item. */
  height: number

  /** The pixel aspect ratio of the item. */
  pixelAspect: number

  /** The frame rate of the item. */
  frameRate: number

  /** The frame duration for the item. */
  frameDuration: number

  /** The total duration of the item. */
  duration: number

  /** When true, a proxy source is used for this item. */
  useProxy: boolean

  /** Current time of the item. */
  time: number

  /** Sets a proxy for the item. */
  setProxy(file: File): void

  /** Sets a sequence as a proxy for the item. */
  setProxyWithSequence(file: File, forceAlphabetical: boolean): void

  /** Sets a solid as a proxy for the item. */
  setProxyWithSolid(
    color: ThreeDColorValue,
    name: string,
    width: number,
    height: number,
    pixelAspect: number,
  ): void

  /** Sets a placeholder as a proxy for the item. */
  setProxyWithPlaceholder(
    name: string,
    width: number,
    height: number,
    frameRate: number,
    duration: number,
  ): void

  /** Removes the proxy for the item. */
  setProxyToNone(): void
}

/** The AVLayer object provides an interface to those layers that contain AVItem objects (composition layers, footage layers, solid layers, text layers, and sound layers). */
declare class AVLayer extends Layer {
  /** The source item for this layer. */
  readonly source: any

  /** When true, the layer has no expressly set name, but contains a named source. */
  readonly isNameFromSource: boolean

  /** The height of the layer. */
  readonly height: number

  /** The width of the layer. */
  readonly width: number

  /** When true, it is legal to change the value of collapseTransformation. */
  readonly canSetCollapseTransformation: boolean

  /** When true, frame blending is enabled. */
  readonly frameBlending: boolean

  /** When true, it is legal to change the value of timeRemapEnabled. */
  readonly canSetTimeRemapEnabled: boolean

  /** When true, the layer contains an audio component. */
  readonly hasAudio: boolean

  /** When true, the layer's audio is active at the current time. */
  readonly audioActive: boolean

  /** When true, this layer is being used as a track matte for the layer below it. */
  readonly isTrackMatte: boolean

  /** When true, the layer above is being used as a track matte on this layer. */
  readonly hasTrackMatte: boolean

  /** Returns the track matte layer for this layer. Returns null if this layer has no track matte layer. */
  readonly trackMatteLayer: AVLayer | null

  /** When true, the layer's audio is enabled. */
  audioEnabled: boolean

  /** When true, the layer's motion blur is enabled. */
  motionBlur: boolean

  /** When true, the layer's effects are active. */
  effectsActive: boolean

  /** When true, this is an adjustment layer. */
  adjustmentLayer: boolean

  /** When true, this is an environment layer. */
  environmentLayer: boolean

  /** When true, this is a guide layer. */
  guideLayer: boolean

  /** When true, this is a 3D layer. */
  threeDLayer: boolean

  /** When true, 3D is set on a per-character basis in this text layer. */
  threeDPerChar: boolean

  /** When true, collapse transformation is on. */
  collapseTransformation: boolean

  /** The type of frame blending for the layer. */
  frameBlendingType: FrameBlendingType

  /** When true, time remapping is enabled on this layer. */
  timeRemapEnabled: boolean

  /** The blending mode of the layer. */
  blendingMode: BlendingMode

  /** When true, preserve transparency is enabled. */
  preserveTransparency: boolean

  /** The layer sampling quality setting. */
  samplingQuality: LayerSamplingQuality

  /**
   * If this layer has a track matte, specifies the way the track matte is applied.
   *
   * Legacy API; use `AVLayer.setTrackMatte()` and `AVLayer.removeTrackMatte()` instead.
   *
   * @deprecated since version 23.0.
   */
  trackMatteType: TrackMatteType

  /** The layer quality setting. */
  quality: LayerQuality

  /** Reports whether this layer's audio is active at a given time. */
  audioActiveAtTime(time: number): boolean

  /** Calculates a transformation from a set of points in this layer. */
  calculateTransformFromPoints(
    pointTopLeft: [number, number, number],
    pointTopRight: typeof pointTopLeft,
    pointBottomRight: typeof pointTopLeft,
  ): object

  /** Converts composition coordinates, such as sourcePointToComp, to layer coordinates. */
  sourcePointToComp(point: [number, number]): [number, number]

  /** Converts composition coordinates, such as sourcePointToComp, to layer coordinates. */
  compPointToSource(point: [number, number]): [number, number]

  /** Opens the layer in a Layer panel. */
  openInViewer(): Viewer | null

  /** Changes the source item for this layer. */
  replaceSource(newSource: AVItem, fixExpressions: boolean): void

  /** Retrieves the source rectangle of a layer. */
  sourceRectAtTime(
    timeT: number,
    extents: boolean,
  ): { top: number; left: number; width: number; height: number }

  /** Adds the layer to the Essential Graphics Panel for the specified composition. */
  addToMotionGraphicsTemplate(comp: CompItem): boolean

  /** Adds the layer to the Essential Graphics Panel for the specified composition. */
  addToMotionGraphicsTemplateAs(comp: CompItem, name: string): boolean

  /** True if the layer can be added to the EGP for the specified composition */
  canAddToMotionGraphicsTemplate(comp: CompItem): boolean

  /** Removes the track matte for this layer while preserving the TrackMatteType. Use setTrackMatteType() for another way of removing track matte. */
  removeTrackMatte(): void

  /** Sets the track matte layer and type for this layer. Passing in null to trackMatteLayer parameter removes the track matte. Use removeTrackMatte() for another way of removing track matte. */
  setTrackMatte(trackMatteLayer: AVLayer | null, trackMatteType: TrackMatteType): void

  /** Shortcuts */
  readonly timeRemap: OneDProperty
  readonly mask: MaskPropertyGroup
  readonly effect: PropertyGroup
  readonly layerStyle: _LayerStyles
  readonly geometryOption: _GeometryOptionsGroup
  readonly materialOption: _MaterialOptionsGroup
  readonly audio: _AudioGroup
}

/** The CameraLayer object represents a camera layer within a composition. Create it using the LayerCollection object’s addCamera method */
declare class CameraLayer extends Layer {
  /** Shortcuts */
  readonly cameraOption: _CameraOptionsGroup
}

/** Like an array, a collection associates a set of objects or values as a logical group and provides access to them by index. However, most collection objects are read-only. You do not assign objects to them yourself—their contents update automatically as objects are created or deleted. */
declare class Collection {
  /** The number of objects in the collection. */
  readonly length: number
}

/** The CompItem object represents a composition, and allows you to manipulate and get information about it. Access the objects by position index number in a project’s item collection. */
declare class CompItem extends AVItem {
  /** The number of layers in the composition. */
  readonly numLayers: number

  /** The current active camera layer. */
  readonly activeCamera: CameraLayer | null

  /** The layers of the composition. */
  readonly layers: LayerCollection

  /** The markers of the composition. */
  readonly markerProperty: MarkerValueProperty

  /** The selected layers of the composition. */
  readonly selectedLayers: Layer[]

  /** The selected properties of the composition. */
  readonly selectedProperties: _PropertyClasses[]

  /** The set of available rendering plug-in modules. */
  readonly renderers: string[]

  /** The number of properties in the Essential Graphics panel for the composition. */
  readonly motionGraphicsTemplateControllerCount: number

  /** The duration of a single frame. */
  frameDuration: number

  /** The work area start time. */
  workAreaStart: number

  /** The work area duration. */
  workAreaDuration: number

  /** When true, shy layers are visible in the Timeline panel. */
  hideShyLayers: boolean

  /** When true, motion blur is enabled for this composition. */
  motionBlur: boolean

  /** When true, Draft 3D mode is enabled for the Composition panel. */
  draft3d: boolean

  /** When true, time filtering is enabled for this composition. */
  frameBlending: boolean

  /** When true, the frame rate of nested compositions is preserved. */
  preserveNestedFrameRate: boolean

  /** When true, the resolution of nested compositions is preserved. */
  preserveNestedResolution: boolean

  /** The background color of the composition. */
  bgColor: ThreeDColorValue

  /** Changes the display of the start time in the Timeline panel. */
  displayStartTime: number

  /** The factor by which the x and y resolution of the Composition panel is downsampled. */
  resolutionFactor: [number, number]

  /** The camera shutter angle. */
  shutterAngle: number

  /** The camera shutter phase. */
  shutterPhase: number

  /** The minimum number of motion blur samples per frame for Classic 3D layers, shape layers, and certain effects. */
  motionBlurSamplesPerFrame: number

  /** The maximum number of motion blur samples of 2D layer motion. */
  motionBlurAdaptiveSampleLimit: number

  /** Read or write the name property in the Essential Graphics panel for the composition. */
  motionGraphicsTemplateName: string

  /** The rendering plug-in module to be used to render this composition. */
  renderer: string

  /** When true, indicates that the composition uses drop-frame timecode. */
  dropFrame: boolean

  /** The frame value of the beginning of the composition. */
  displayStartFrame: number

  /** Creates and returns a duplicate of this composition. */
  duplicate(): CompItem

  /** Gets a layer from this composition. */
  layer(index: number): Layer
  layer(otherLayer: Layer, relIndex: number): Layer
  layer(name: string): Layer

  /** Opens the composition in a Composition panel. */
  openInViewer(): Viewer | null

  /** Save the specific frame to a png file */
  saveFrameToPng(time: number, file: File): void

  /** Open this Composition in the Preview panel, and change the zoom and exposure settings. */
  ramPreviewTest(unknown: any, zoom: number, exposure: number): void

  /** Exports the composition as a Motion Graphics template. */
  exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting: boolean, file_path?: string): boolean

  /** Opens the composition in the Essential Graphics panel. */
  openInEssentialGraphics(): void

  /** Gets the name of a single property in the Essential Graphics panel. */
  getMotionGraphicsTemplateControllerName(index: number): string

  /** Sets the name of a single property in the Essential Graphics panel. */
  setMotionGraphicsControllerName(index: number, newName: string): string
}

/** The FileSource object describes footage that comes from a file. */
declare class FileSource extends FootageSource {
  /** The file that defines this asset. */
  readonly file: File

  /** The file that contains footage missing from this asset. */
  readonly missingFootagePath: string

  /** Reloads the asset from the file, if it is a mainSource of a FootageItem. */
  reload(): void
}

/** The FolderItem object corresponds to a folder in your Project panel. It can contain various types of items (footage, compositions, solids) as well as other folders. */
declare class FolderItem extends Item {
  /** The contents of this folder. */
  readonly items: ItemCollection

  /** The number of items contained in the folder. */
  readonly numItems: number

  /** Gets an item from the folder. */
  item(index: number): _ItemClasses
}

/** The FootageItem object represents a footage item imported into a project, which appears in the Project panel. These are accessed by position index number in a project’s item collection. */
declare class FootageItem extends AVItem {
  /** The footage source file. */
  readonly file: File | null

  /** All settings related to the footage item. */
  readonly mainSource: FootageSource

  /** Opens the footage in a Footage panel. */
  openInViewer(): Viewer | null

  /** Replaces a footage file with another footage file. */
  replace(file: File): void

  /** Replaces a footage file with a placeholder object. */
  replaceWithPlaceholder(
    name: string,
    width: number,
    height: number,
    frameRate: number,
    duration: number,
  ): void

  /** Replaces a footage file with an image sequence. */
  replaceWithSequence(file: File, forceAlphabetical: boolean): void

  /** Replaces a footage file with a solid. */
  replaceWithSolid(
    color: ThreeDColorValue,
    name: string,
    width: number,
    height: number,
    pixelAspect: number,
  ): void
}

declare class PlaceholderItem extends FootageItem {}

/** The FootageSource object holds information describing the source of some footage. It is used as the mainSource of a FootageItem, or the proxySource of a CompItem or FootageItem. */
declare class FootageSource {
  /** The footage source file. */
  readonly file: File | null

  /** When true, footage is a still image. */
  readonly isStill: boolean

  /** The effective frame rate as displayed and rendered in compositions by After Effects. */
  readonly displayFrameRate: number

  /** When true, a footage clip or proxy includes an alpha channel. */
  hasAlpha: boolean

  /** The mode of an alpha channel. */
  alphaMode: AlphaMode

  /** The color to be premultiplied. */
  premulColor: ThreeDColorValue

  /** When true, an alpha channel in a footage clip or proxy should be inverted. */
  invertAlpha: boolean

  /** The field separation type. */
  fieldSeparationType: FieldSeparationType

  /** How the fields are to be separated in non-still footage. */
  highQualityFieldSeparation: boolean

  /** The pulldown type for the footage. */
  removePulldown: PulldownPhase

  /** How many times an image sequence is set to loop. */
  loop: number

  /** The native frame rate of the footage. */
  nativeFrameRate: number

  /** The rate to which footage should conform. */
  conformFrameRate: number

  /** Estimates the alphaMode setting. */
  guessAlphaMode(): void

  /** Estimates the pulldownType setting. */
  guessPulldown(method: PulldownMethod): void
}

/** The ImportOptions object encapsulates the options used to import a file with the Project.importFile methods. */
declare class ImportOptions {
  constructor(file?: File)

  /** The type of file to be imported. */
  importAs: ImportAsType

  /** When true, import a sequence of files, rather than an individual file. */
  sequence: boolean

  /** When true, the “Force alphabetical order” option is set. */
  forceAlphabetical: boolean

  /** The file to import, or the first file of the sequence to import. */
  file: File

  /** Restricts input to a particular file type. */
  canImportAs(type: ImportAsType): boolean
}

/** The Item object represents an item that can appear in the Project panel. */
declare class Item {
  /** A unique identifier for this item. */
  readonly id: number

  /** The type of item. */
  readonly typeName: string

  /** The name of the object as shown in the Project panel. */
  name: string

  /** A descriptive string. */
  comment: string

  /** The parent folder of this item. */
  parentFolder: FolderItem

  /** When true, this item is currently selected. */
  selected: boolean

  /** The label color for the item. */
  label: number

  /** Creates a new guide and adds it to the guides object of the Item. */
  addGuide(orientationType: number, position: number): number

  /** Removes an existing guide. */
  removeGuide(guideIndex: number): void

  /** Modifies the position of an existing guide. */
  setGuide(position: number, guideIndex: number): void

  /** Deletes the item from the project. */
  remove(): void
}

/** The ItemCollection object represents a collection of items. The ItemCollection belonging to a Project object contains all the Item objects for items in the project. The ItemCollection belonging to a FolderItem object contains all the Item objects for items in that folder. */
declare class ItemCollection extends Collection {
  /** Retrieves a Item object in the collection by its index number. The first object is at index 1. */
  readonly [index: number]: _ItemClasses

  /** Creates a new CompItem object and adds it to the collection. */
  addComp(
    name: string,
    width: number,
    height: number,
    pixelAspect: number,
    duration: number,
    frameRate: number,
  ): CompItem

  /** Creates a new FolderItem object and adds it to the collection. */
  addFolder(name: string): FolderItem
}

/** The KeyframeEase object encapsulates the keyframe ease settings of a layer’s AE property. Keyframe ease is determined by the speed and influence values that you set using the property’s setTemporalEaseAtKey method. */
declare class KeyframeEase {
  constructor(speed: number, influence: number)

  /** The speed setting for a keyframe. */
  speed: number

  /** The influence setting for a keyframe. */
  influence: number
}

declare class Layer extends PropertyGroup {
  /** The unique and persistent identification number. */
  readonly id: number

  /** The index position of the layer. */
  readonly index: number

  /** The current time of the layer. */
  readonly time: number

  /** When true, the layer contains a video component. */
  readonly hasVideo: boolean

  /** When true, the layer is active at the current time. */
  readonly active: boolean

  /** When true, this is a null layer. */
  readonly nullLayer: boolean

  /** All selected AE properties in the layer. */
  readonly selectedProperties: _PropertyClasses[]

  /** The composition that contains this layer. */
  readonly containingComp: CompItem

  /** When true, the layer’s name has been explicitly set. */
  readonly isNameSet: boolean

  /** The name of the layer. */
  name: string

  /** The parent of this layer. */
  parent: Layer | null

  /** The start time of the layer. */
  startTime: number

  /** The time stretch percentage of the layer. */
  stretch: number

  /** The “in” point of the layer. */
  inPoint: number

  /** The “out” point of the layer. */
  outPoint: number

  /** When true, the layer is enabled. */
  enabled: boolean

  /** When true, the layer is soloed. */
  solo: boolean

  /** When true, the layer is shy. */
  shy: boolean

  /** When true, the layer is locked. */
  locked: boolean

  /** A descriptive comment for the layer. */
  comment: string

  /** The label color for the layer. */
  label: number

  /** The type of automatic orientation for the layer. */
  autoOrient: AutoOrientType

  /** Moves the layer to the top of the composition (makes it the first layer). */
  moveToBeginning(): void

  /** Moves the layer to the bottom of the composition (makes it the last layer). */
  moveToEnd(): void

  /** Moves the layer below another layer. */
  moveAfter(layer: Layer): void

  /** Moves the layer above another layer. */
  moveBefore(layer: Layer): void

  /** Duplicates the layer. */
  duplicate<T = Layer>(this: T): T

  /** Copies the layer to the top (beginning) of another composition. */
  copyToComp(intoComp: CompItem): void

  /** Runs Scene Edit Detection on the layer that the method is called on and returns an array containing the times of any detected scenes */
  doSceneEditDetection(applyOptions: SceneEditDetectionMode): number[]

  /** Reports whether this layer will be active at a specified time. */
  activeAtTime(time: number): boolean

  /** Sets a new parent for this layer. */
  setParentWithJump(newParent?: Layer): void

  /** Applies a named collection of animation settings to the layer. */
  applyPreset(presetName: File): void

  /** Shortcuts */
  readonly marker: MarkerValueProperty
  readonly transform: _TransformGroup

  /** Transform shortcuts */
  readonly anchorPoint: TwoDOrThreeDProperty
  readonly position: TwoDOrThreeDProperty
  readonly xPosition: OneDProperty
  readonly yPosition: OneDProperty
  readonly zPosition: OneDProperty
  readonly scale: TwoDOrThreeDProperty
  readonly orientation: ThreeDProperty
  readonly rotation: OneDProperty
  readonly xRotation: OneDProperty
  readonly yRotation: OneDProperty
  readonly zRotation: OneDProperty
  readonly opacity: OneDProperty
  readonly pointOfInterest: ThreeDProperty
}

/** The LayerCollection object represents a set of layers. The LayerCollection belonging to a CompItem object contains all the layer objects for layers in the composition. The methods of the collection object allow you to manipulate the layer list. */
declare class LayerCollection extends Collection {
  /** Retrieves a Layer object in the collection by its index number. The first object is at index 1. */
  readonly [index: number]: Layer

  /** Creates a new AVLayer and adds it to this collection. */
  add(item: AVItem, duration?: number): AVLayer

  /** Creates a new, null layer and adds it to this collection. */
  addNull(duration?: number): AVLayer

  /** Creates a new layer, a FootageItem with a SolidSource, and adds it to this collection. */
  addSolid(
    color: ThreeDColorValue,
    name: string,
    width: number,
    height: number,
    pixelAspect: number,
    duration?: number,
  ): AVLayer

  /** Creates a new paragraph (box) text layer and adds it to this collection. */
  addBoxText(size: [number, number], sourceText?: string | TextDocument): TextLayer

  /** Creates a new point text layer and adds it to this collection. */
  addText(sourceText?: string | TextDocument): TextLayer

  /** Creates a new camera layer and adds it to this collection. */
  addCamera(name: string, centerPoint: [number, number]): CameraLayer

  /** Creates a new light layer and adds it to this collection. */
  addLight(name: string, centerPoint: [number, number]): LightLayer

  /** Creates a new shape layer and adds it to this collection. */
  addShape(): ShapeLayer

  /** Retrieves the layer object with a specified name. */
  byName(name: string): Layer | null

  /** Collects specified layers into a new composition. */
  precompose(layerIndicies: number[], name: string, moveAllAttributes?: boolean): CompItem
}

/** The LightLayer object represents a light layer within a composition. Create it using the LayerCollection object’s addLight method */
declare class LightLayer extends Layer {
  /** Shortcuts */
  readonly lightOption: _LightOptionsGroup

  /** For light layers, the type of light. */
  lightType: LightType
}

/** The MarkerValue object represents a layer marker, which associates a comment, and optionally a chapter reference point, Web-page link, or Flash Video cue point with a particular point in a layer. */
declare class MarkerValue {
  constructor(
    comment: string,
    chapter?: string,
    url?: string,
    frameTarget?: string,
    cuePointName?: string,
    params?: string,
  )

  /** A comment on the associated layer. */
  comment: string

  /** A chapter link reference point for the associated layer. */
  chapter: string

  /** The Flash Video cue point name. */
  cuePointName: string

  /** The amount of time represented by the marker. */
  duration: number

  /** Whether the Flash Video cue point is for an event or navigation. */
  eventCuePoint: boolean

  /** A URL for Web page to be associated with the layer. */
  url: string

  /** A specific frame target within the Web page specified by url. */
  frameTarget: string

  /** The label color for a composition or layer marker. */
  label: number

  /** State of the Protected Region option in the Composition Marker dialog box. */
  protectedRegion: boolean

  /** Retrieves the key-value pairs associated with the marker value. */
  getParameters(): object

  /** Sets the key-value pairs associated with the marker value. */
  setParameters(keyValuePairs: object): void
}

/** The MaskPropertyGroup object encapsulates mask attributes in a layer. */
declare class MaskPropertyGroup extends PropertyGroup {
  /** The mask mode. */
  maskMode: MaskMode

  /** When true, the mask is inverted. */
  inverted: boolean

  /** When true, the shape of the mask is RotoBezier. */
  rotoBezier: boolean

  /** How motion blur is applied to this mask. */
  maskMotionBlur: MaskMotionBlur

  /** When true, the mask is locked. */
  locked: boolean

  /** The color used to draw the mask outline in the user interface. */
  color: ThreeDColorValue

  /** The shape of the mask. */
  maskShape: ShapeProperty

  /** The path of the mask. */
  maskPath: ShapeProperty

  /** The mask feather amount. */
  maskFeather: TwoDProperty

  /** The feather falloff mode for the mask. */
  maskFeatherFalloff: MaskFeatherFalloff

  /** The mask opacity. */
  maskOpacity: OneDProperty

  /** The mask expansion amount. */
  maskExpansion: OneDProperty
}

/** The OMCollection contains all of the output modules in a render queue. The collection provides access to the OutputModule objects, but does not provide any additional functionality. The first OutputModule object in the collection is at index position 1. */
declare class OMCollection extends Collection {
  /** Retrieves a OutputModule object in the collection by its index number. The first object is at index 1. */
  readonly [index: number]: OutputModule
}

/** An OutputModule object of a RenderQueueItem generates a single file or sequence via a render operation, and contains attributes and methods relating to the file to be rendered. */
declare class OutputModule {
  /** The user-interface name of the output module. */
  readonly name: string

  /** All templates for the output module */
  readonly templates: string[]

  /** The path and name of the file to be rendered. */
  file: File

  /** An action to be taken after rendering. */
  postRenderAction: PostRenderAction

  /** When true, writes all source footage XMP metadata to the output file. */
  includeSourceXMP: boolean

  /** Removes this output module from the render-queue item’s list. */
  remove(): void

  /** Saves a new output-module template. */
  saveAsTemplate(name: string): void

  /** Applies an output-module template. */
  applyTemplate(templateName: string): void

  getSetting(key: string): string | number

  getSettings(format?: GetSettingsFormat): {
    "Audio Bit Depth": string
    "Audio Channels": string
    "Audio Sample Rate": string
    Channels: string
    Color: string
    Crop: string
    "Crop Bottom": string
    "Crop Left": string
    "Crop Right": string
    "Crop Top": string
    Depth: string
    Format: string
    "Include Project Link": string
    "Include Source XMP Metadata": string
    "Lock Aspect Ratio": string
    "Output Audio": string
    "Output File Info": string
    "Post-Render Action": string
    Resize: string
    "Resize Quality": string
    "Resize to": object
    "Starting #": string
    "Use Comp Frame Number": string
    "Use Region of Interest": string
    "Video Output": string
  }

  setSetting(key: string, value: string | number): void

  setSettings(settings: object): void
}

/** The PlaceholderSource object describes the footage source of a placeholder. */
declare class PlaceholderSource extends FootageSource {}

/** The project object represents an After Effects project. Attributes provide access to specific objects within the project, such as imported files or footage and compositions, and also to project settings such as the timecode base. Methods can import footage, create solids, compositions and folders, and save changes. */
declare class Project {
  /** The file for the currently open project. */
  readonly file: File | null

  /** The folder containing all the contents of the project; the equivalent of the Project panel */
  readonly rootFolder: FolderItem

  /** All items in the project. */
  readonly items: ItemCollection

  /** The currently active item. */
  readonly activeItem: _ItemClasses | null

  /** The total number of items contained in the project. */
  readonly numItems: number

  /** All items selected in the Project panel. */
  readonly selection: _ItemClasses[]

  /** The project’s render queue. */
  readonly renderQueue: RenderQueue

  /** The color depth of the current project. */
  bitsPerChannel: number

  /** When true, thumbnail views use the transparency checkerboard pattern. */
  transparencyGridThumbnails: boolean

  /** The frame at which to start numbering when displaying the project. */
  displayStartFrame: number

  /** Get or set the current projects GPU Acceleration option. */
  gpuAccelType: GpuAccelType

  /** When true, linear blending is used for the project. */
  linearBlending: boolean

  /** The project’s XMP metadata. */
  xmpPacket: string

  /** The Frame Count menu setting in the Project Settings dialog box. */
  framesCountType: FramesCountType

  /** The Use Feet + Frames menu setting in the Project Settings dialog box. */
  feetFramesFilmType: FeetFramesFilmType

  /** The Use Feet + Frames setting in the Project Settings dialog box. */
  framesUseFeetFrames: boolean

  /** The Footage Start Time setting in the Project Settings dialog box, which is enabled when Timecode is selected as the time display style. */
  footageTimecodeDisplayStartType: FootageTimecodeDisplayStartType

  /** The time display style, corresponding to the Time Display Style section in the Project Settings dialog box. */
  timeDisplayType: TimeDisplayType

  /** The active tool in the Tools panel. */
  toolType: ToolType

  /** The current project’s working gamma value, either 2.2 or 2.4. */
  workingGamma: 2.2 | 2.4

  /** A string which is the color profile description for the project’s color working space. */
  workingSpace: string

  /** True if Linearize Working Space should be enabled for this project. */
  linearizeWorkingSpace: boolean

  /** True if Compensate for Scene-referred Profiles should be enabled for this project. */
  compensateForSceneReferredProfiles: boolean

  /** The Expressions Engine setting in the Project Settings dialog box. */
  expressionEngine: "extendscript" | "javascript-1.0"

  /** Retrieves an item from the project. */
  item(index: number): _ItemClasses

  /** Retrieves an item by its Item ID */
  itemByID(id: number): _ItemClasses

  /** Consolidates all footage in the project. */
  consolidateFootage(): number

  /** Removes unused footage from the project. */
  removeUnusedFootage(): number

  /** Reduces the project to a specified set of items. */
  reduceProject(array_of_items: _ItemClasses[]): number

  /** Closes the project with normal save options. */
  close(closeOptions: CloseOptions): boolean

  /** Saves the project. */
  save(file?: File): void

  /** Displays a Save dialog box. */
  saveWithDialog(): boolean

  /** Imports a placeholder into the project. */
  importPlaceholder(
    name: string,
    width: number,
    height: number,
    frameRate: number,
    duration: number,
  ): PlaceholderItem

  /** Imports a file into the project. */
  importFile(importOptions: ImportOptions): _ItemClasses

  /** Displays an Import File dialog box. */
  importFileWithDialog(): _ItemClasses[] | null

  /** Shows or hides the Project panel. */
  showWindow(doShow: boolean): void

  /** Automatically replaces text in all expressions. */
  autoFixExpressions(oldText: string, newText: string): void

  /** Creates a new team project. */
  newTeamProject(teamProjectName: string, description: string): boolean

  /** Opens a team project. */
  openTeamProject(teamProjectName: string): boolean

  /** Shares the currently open team project. */
  shareTeamProject(comment: string): boolean

  /** Syncs the currently open team project. */
  syncTeamProject(): boolean

  /** Closes a currently open team project. */
  closeTeamProject(): boolean

  /** Converts a team project to an After Effects project on a local disk. */
  convertTeamProjectToProject(project_file: File): boolean

  /** Returns an array containing the name strings for all team projects available for the current user. Archived Team Projects are not included. */
  listTeamProjects(): string[]

  /** Retrieves a layer by its Layer ID */
  layerByID(id: number): Layer | null

  /** Checks whether specified team project is currently open. */
  isTeamProjectOpen(teamProjectName: string): boolean

  /** Checks whether any team project is currently open. */
  isAnyTeamProjectOpen(): boolean

  /** Checks whether or not team projects is enabled for After Effects. (This will almost always return true.) */
  isTeamProjectEnabled(): boolean

  /** Checks whether or not the client (After Effects) is currently logged into the team project server. */
  isLoggedInToTeamProject(): boolean

  /** Checks whether or not the Sync command is enabled. */
  isSyncCommandEnabled(): boolean

  /** Checks whether or not the Share command is enabled. */
  isShareCommandEnabled(): boolean

  /** Checks whether or not the Resolve command is enabled. */
  isResolveCommandEnabled(): boolean

  /** Resolves a conflict between the open team project and the version on the team projects server, using the specified resolution method. */
  resolveConflict(ResolveType: ResolveType): boolean

  /** Returns an array of color profile descriptions that can be set as the project’s color working space. */
  listColorProfiles(): string[]

  /** Sets the folder that will be shown in the file import dialog. */
  setDefaultImportFolder(folder: Folder): boolean
}

type PropertyClassMembers = {
  [P in keyof Property]: Property[P]
}
declare interface UnknownPropertyType extends PropertyClassMembers {
  propertyValueType: PropertyValueType
  value: any
}

declare interface NoValueType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.NO_VALUE
  value: any
}

type ColorValue = [number, number, number, number]
type ThreeDColorValue = [number, number, number]

declare interface ColorType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.COLOR
  value: ColorValue
}

declare interface BooleanType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.OneD
  value: boolean
}
declare interface OneDType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.OneD
  value: number
}

declare interface TwoDType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.TwoD
  value: TwoDPoint
}

type TwoDPoint = [number, number]
declare interface TwoDSpatialType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.TwoD_SPATIAL
  value: TwoDPoint
}

type ThreeDPoint = [number, number, number]

declare interface ThreeDType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.ThreeD
  value: ThreeDPoint
}

declare interface TextDocumentType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.TEXT_DOCUMENT
  value: TextDocument
}

declare interface MarkerValueType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.MARKER
  value: MarkerValue
}

declare interface ShapePropertyType extends PropertyClassMembers {
  propertyValueType: PropertyValueType.SHAPE
  value: Shape
}

type NoValueProperty = Property<NoValueType>
type ColorProperty = Property<ColorType>
type OneDProperty = Property<OneDType>
type TwoDProperty = Property<TwoDType>
type ThreeDProperty = Property<ThreeDType>
type TwoDOrThreeDProperty = Property<TwoDType | ThreeDType>
type ShapeProperty = Property<ShapePropertyType>
type MarkerValueProperty = Property<MarkerValueType>
type TextDocumentProperty = Property<TextDocumentType>

type AnyProperty =
  | NoValueProperty
  | ColorProperty
  | OneDProperty
  | TwoDProperty
  | ThreeDProperty
  | TwoDOrThreeDProperty
  | ShapeProperty
  | MarkerValueProperty
  | TextDocumentProperty

/** The Property object contains value, keyframe, and expression information about a particular AE property of a layer. */
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
  /** Type of value stored in this property. */
  readonly propertyValueType: T["propertyValueType"]

  /** Current value of the property. */
  readonly value: T["value"]

  /** When true, there is a minimum permitted value. */
  readonly hasMin: boolean

  /** When true, there is a maximum permitted value. */
  readonly hasMax: boolean

  /** The minimum permitted value. */
  readonly minValue: number

  /** The maximum permitted value. */
  readonly maxValue: number

  /** When true, the property defines a spatial value. */
  readonly isSpatial: boolean

  /** When true, the property can be keyframed. */
  readonly canVaryOverTime: boolean

  /** When true, the expression can be set by a script. */
  readonly canSetExpression: boolean

  /** When true, the property has keyframes or an expression enabled that can vary its values. */
  readonly isTimeVarying: boolean

  /** The number of keyframes on this property. */
  readonly numKeys: number

  /** A text description of the units in which the value is expressed. */
  readonly unitsText: string

  /** The error, if any, that occurred when the last expression was evaluated. */
  readonly expressionError: string

  /** All selected keyframes of the property. */
  readonly selectedKeys: number[]

  /** The position index of this property. */
  readonly propertyIndex: number

  /** When true, the property represents one of the separated dimensions for a multidimensional property. */
  readonly isSeparationFollower: boolean

  /** When true, the property is multidimensional and can be separated. */
  readonly isSeparationLeader: boolean

  /** For a separated follower, the dimension it represents in the multidimensional leader. */
  readonly separationDimension: number

  /** The original multidimensional property for this separated follower. */
  readonly separationLeader: TwoDOrThreeDProperty

  /** When true, the property is the Menu property of a Dropdown Menu Control effect. */
  readonly isDropdownEffect: boolean

  /** The alternate render source for Media Replacement */
  readonly alternateSource: AVItem

  /** True if the property allows Media Replacement */
  readonly canSetAlternateSource: boolean

  /**
   * Instance property on an Essential Property object which returns the original source Property which was used to create the Essential Property.
   */
  readonly essentialPropertySource: Property<T> | AVLayer | null

  /** The expression string for this property. */
  expression: string

  /** When true, the expression is used to generate values for the property. */
  expressionEnabled: boolean

  /** When true, the property’s dimensions are represented as separate properties. */
  dimensionsSeparated: boolean

  /** Gets the value of the property evaluated at given time. */
  valueAtTime(time: number, preExpression: boolean): T["value"]

  /** Sets the static value of the property. */
  setValue(newValue: T["value"]): void

  /** Creates a keyframe for the property. */
  setValueAtTime(time: number, newValue: T["value"]): void

  /** Creates a set of keyframes for the property. */
  setValuesAtTimes(times: number[], newValues: T["value"][]): void

  /** Finds a keyframe and sets the value of the property at that keyframe. */
  setValueAtKey(keyIndex: number, newValue: T["value"]): void

  /** Gets the keyframe nearest to a specified time. */
  nearestKeyIndex(time: number): number

  /** Gets the time at which a condition occurs. */
  keyTime(keyIndex: number): number
  keyTime(markerComment: string): number

  /** Gets the value of a keyframe at the time at which a condition occurs. */
  keyValue(keyIndex: number): T["value"]
  keyValue(markerComment: string): MarkerValue

  /** Adds a new keyframe to the property at a given time. */
  addKey(time: number): number

  /** Removes a keyframe from the property. */
  removeKey(keyIndex: number): void

  /** Returns the labelIndex value assigned to the referenced keyframe. (0 for None, or 1 to 16 for one of the preset colors in the Labels preferences). */
  keyLabel(keyIndex: number): number

  /** Sets the labelIndex value for the referenced keyframe. (0 for None, or 1 to 16 for one of the preset colors in the Labels preferences). */
  setLabelAtKey(keyIndex: number, labelIndex: number): void

  /** When true, this property can be interpolated. */
  isInterpolationTypeValid(type: KeyframeInterpolationType): boolean

  /** Sets the interpolation type for a key. */
  setInterpolationTypeAtKey(
    keyIndex: number,
    inType: KeyframeInterpolationType,
    outType?: KeyframeInterpolationType,
  ): void

  /** Gets the 'in' interpolation type for a key. */
  keyInInterpolationType(keyIndex: number): KeyframeInterpolationType

  /** Gets the 'out' interpolation type for a key. */
  keyOutInterpolationType(keyIndex: number): KeyframeInterpolationType

  /** Sets the “in” and “out” tangent vectors for a key. */
  setSpatialTangentsAtKey(
    keyIndex: number,
    inTangent: [number, number],
    outTangent: typeof inTangent,
  ): void
  setSpatialTangentsAtKey(
    keyIndex: number,
    inTangent: [number, number, number],
    outTangent: typeof inTangent,
  ): void

  /** Gets the “in” spatial tangent for a key. */
  keyInSpatialTangent(keyIndex: number): [number, number] | [number, number, number]

  /** Gets the “out” spatial tangent for a key. */
  keyOutSpatialTangent(keyIndex: number): [number, number] | [number, number, number]

  /** Sets the “in” and “out” temporal ease for a key. */
  setTemporalEaseAtKey(
    keyIndex: number,
    inTemporalEase: [KeyframeEase],
    outTemporalEase?: typeof inTemporalEase,
  ): void
  setTemporalEaseAtKey(
    keyIndex: number,
    inTemporalEase: [KeyframeEase, KeyframeEase],
    outTemporalEase?: typeof inTemporalEase,
  ): void
  setTemporalEaseAtKey(
    keyIndex: number,
    inTemporalEase: [KeyframeEase, KeyframeEase, KeyframeEase],
    outTemporalEase?: typeof inTemporalEase,
  ): void

  /** Gets the “in” temporal ease for a key. */
  keyInTemporalEase(
    keyIndex: number,
  ): [KeyframeEase] | [KeyframeEase, KeyframeEase] | [KeyframeEase, KeyframeEase, KeyframeEase]

  /** Gets the “out” temporal ease for a key. */
  keyOutTemporalEase(
    keyIndex: number,
  ): [KeyframeEase] | [KeyframeEase, KeyframeEase] | [KeyframeEase, KeyframeEase, KeyframeEase]

  /** Sets whether a keyframe has temporal continuity. */
  setTemporalContinuousAtKey(keyIndex: number, newVal: boolean): void

  /** Reports whether a keyframe has temporal continuity. */
  keyTemporalContinuous(keyIndex: number): boolean

  /** Sets whether a keyframe has temporal auto-Bezier. */
  setTemporalAutoBezierAtKey(keyIndex: number, newVal: boolean): void

  /** Reports whether a keyframe has temporal auto-Bezier. */
  keyTemporalAutoBezier(keyIndex: number): boolean

  /** Sets whether a keyframe has spatial continuity. */
  setSpatialContinuousAtKey(keyIndex: number, newVal: boolean): void

  /** Reports whether a keyframe has spatial continuity. */
  keySpatialContinuous(keyIndex: number): boolean

  /** Sets whether a keyframe has spatial auto-Bezier. */
  setSpatialAutoBezierAtKey(keyIndex: number, newVal: boolean): void

  /** Reports whether a keyframe has spatial auto-Bezier. */
  keySpatialAutoBezier(keyIndex: number): boolean

  /** Sets whether a keyframe is roving. */
  setRovingAtKey(keyIndex: number, newVal: boolean): void

  /** Reports whether a keyframe is roving. */
  keyRoving(keyIndex: number): boolean

  /** Sets whether a keyframe is selected. */
  setSelectedAtKey(keyIndex: number, onOff: boolean): void

  /** Reports whether a keyframe is selected. */
  keySelected(keyIndex: number): boolean

  /** For a separated, multidimensional property, retrieves a specific follower property. */
  getSeparationFollower(dim: number): Property<OneDProperty>

  /** Adds the property to the Essential Graphics panel for the specified composition. */
  addToMotionGraphicsTemplate(comp: CompItem): boolean

  /** Adds the property to the Essential Graphics panel for the specified composition, providing a name. */
  addToMotionGraphicsTemplateAs(comp: CompItem, name: string): boolean

  /** Test whether or not the property can be added to the Essential Graphics panel for the specified composition. */
  canAddToMotionGraphicsTemplate(comp: CompItem): boolean

  /** Sets parameters for a Dropdown Menu Control’s Menu Property. */
  setPropertyParameters(items: string[]): Property<OneDProperty>

  /** Set the alternate source for this property. */
  setAlternateSource(newSource: AVItem): void
}

declare class PropertyBase {
  /** A special name for the property used to build unique naming paths. */
  readonly matchName: string

  /** Index of this property within its parent group. */
  readonly propertyIndex: number

  /** The number of levels of parent groups between this property and the containing layer. */
  readonly propertyDepth: number

  /** The property type. */
  readonly propertyType: PropertyType

  /** The immediate parent group of this property. */
  readonly parentProperty: PropertyGroup

  /** When true, the property has been changed since its creation. */
  readonly isModified: boolean

  /** When true, the user interface displays an eyeball icon for this property. */
  readonly canSetEnabled: boolean

  /** When true, this property is active. */
  readonly active: boolean

  /** When true, this property is not displayed in the user interface. */
  readonly elided: boolean

  /** When true, this property is an effect. */
  readonly isEffect: boolean

  /** When true, this property is a mask. */
  readonly isMask: boolean

  /** Name of the property. */
  name: string

  /** When true, this property is enabled. */
  enabled: boolean

  /** When true, this property is selected. */
  selected: boolean

  /** Gets the parent group for this property. */
  propertyGroup(countUp?: number): PropertyGroup

  /** Removes this from the project. */
  remove(): void

  /** Moves this property to a new position in its parent group. */
  moveTo(newIndex: number): void

  /** Duplicates this property object. */
  duplicate<T = _PropertyClasses>(this: T): T

  /** Gets a member property or group. Strictly, this should be PropertyGroup method. */
  property<T extends _PropertyClasses = _PropertyClasses>(index: number): T
  property<T extends _PropertyClasses = _PropertyClasses>(name: string): T
}

/** Properties are accessed by name through layers, using various kinds of expression syntax, as controlled by application preferences. */
declare interface PropertyGroup {
  (index: number): _PropertyClasses
  (name: string): _PropertyClasses
}

/** The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes. */
declare class PropertyGroup extends PropertyBase {
  /** The number of indexed properties in the group. */
  readonly numProperties: number

  /** Reports whether a property can be added to the group. */
  canAddProperty(name: string): boolean

  /** Adds a property to the group. */
  addProperty(name: string): _PropertyClasses
}

/** The RenderQueue object represents the render automation process, the data and functionality that is available through the Render Queue panel of a particular After Effects project. Attributes provide access to items in the render queue and their render status. Methods can start, pause, and stop the rendering process. */
declare class RenderQueue {
  /** When true, a render is in progress. */
  readonly rendering: boolean

  /** The total number of items in the render queue. */
  readonly numItems: number

  /** CC 2017(14.0)- */
  readonly canQueueInAME: boolean

  /** The collection of items in the render queue. */
  readonly items: RQItemCollection

  /** Read or write the Notify property for the entire Render Queue */
  queueNotify: boolean

  /** Show or hides the Render Queue panel. */
  showWindow(doShow: boolean): void

  /** Starts the rendering process; does not return until render is complete. */
  render(): void

  /** Pauses or restarts the rendering process. */
  pauseRendering(pause: boolean): void

  /** Calls the Queue In AME command */
  queueInAME(render_immediately_in_AME: boolean): void

  /** Stops the rendering process. */
  stopRendering(): void

  /** Gets a render-queue item from the collection. */
  item(index: number): RenderQueueItem
}

/** The RenderQueueItem object represents an individual item in the render queue. It provides access to the specific settings for an item to be rendered. Create the object by adding a composition to the Render Queue with the RQItemCollection object; */
declare class RenderQueueItem {
  /** The total number of Output Modules assigned to the item. */
  readonly numOutputModules: number

  /** The time when rendering began for the item. */
  readonly startTime: Date | null

  /** The time elapsed in the current rendering of this item. */
  readonly elapsedSeconds: number | null

  /** The composition to be rendered by this item. */
  readonly comp: CompItem

  /** The collection of Output Modules for this item. */
  readonly outputModules: OMCollection

  /** A set of Render Settings templates. */
  readonly templates: string[]

  /** The current rendering status of the item. */
  readonly status: RQItemStatus

  /** Sets the Notify checkbox for each individual item in the Render Queue */
  queueItemNotify: boolean

  /** When true, this item is rendered when the queue is started. */
  render: boolean

  /** The start time in the composition to be rendered. */
  timeSpanStart: number

  /** The duration of the composition to be rendered. */
  timeSpanDuration: number

  /** The number of frames to skip when rendering this item. */
  skipFrames: number

  /** A callback function that is called during the rendering process when the status of the item changes. */
  onStatus: string | null

  /** A log type for this item. */
  logType: LogType

  getSetting(key: string): string | number

  getSettings(format: GetSettingsFormat): object

  setSetting(key: string, value: string | number): void

  setSettings(settings: object): void

  /** Gets an Output Module for the item. */
  outputModule(index: number): OutputModule

  /** Removes the item from the render queue. */
  remove(): void

  /** Saves a new Render Settings template. */
  saveAsTemplate(name: string): void

  /** Applies a Render Settings template. */
  applyTemplate(templateName: string): void

  /** Duplicates this item. */
  duplicate(): RenderQueueItem
}

/** The RQItemCollection contains all of the render-queue items in a project, as shown in the Render Queue panel of the project. The collection provides access to the RenderQueueItem objects, and allows you to create them from compositions. The first RenderQueueItem object in the collection is at index position 1. */
declare class RQItemCollection extends Collection {
  /** Retrieves an RenderQueueItem in the collection by its index number. The first object is at index 1. */
  [index: number]: RenderQueueItem

  /** Adds a composition to the Render Queue. */
  add(comp: CompItem): RenderQueueItem
}

/** The Settings object provides an easy way to manage settings for scripts. The settings are saved in the After Effects preferences file and are persistent between application sessions. Settings are identified by section and key within the file, and each key name is associated with a value. In the preferences file, section names are enclosed in brackets and quotation marks, and key names are listing in quotation marks below the section name. All values are strings. */
declare class Settings {
  /** Saves a default value for a setting. */
  saveSetting(sectionName: string, keyName: string, value: string, type?: PREFType): void

  /** Retrieves a setting value. */
  getSetting(sectionName: string, keyName: string, type?: PREFType): string

  /** Reports whether a specified setting is assigned. */
  haveSetting(sectionName: string, keyName: string, type?: PREFType): boolean
}

/** The Shape object encapsulates information describing a shape in a shape layer, or the outline shape of a Mask. */
declare class Shape {
  /** When true, the shape is a closed curve. */
  closed: boolean

  /** The anchor points of the shape. */
  vertices: [number, number][]

  /** The tangent vectors coming into the shape vertices. */
  inTangents: [number, number][]

  /** The tangent vectors coming out of the shape vertices. */
  outTangents: [number, number][]

  /** The mask path segment (sections of a mask path between vertices) containing each feather point. */
  featherSegLocs: number[]

  /** The relative position of each feather point on its mask path segment. */
  featherRelSegLocs: number[]

  /** The feather amount (radius) for each feather point. */
  featherRadii: number[]

  /** The feather radius interpolation type for each feather point. */
  featherInterps: number[]

  /** The feather tension at each feather point. */
  featherTensions: number[]

  /** The direction (inner or outer) of each feather point. */
  featherTypes: number[]

  /** The relative angle between the two normals on either side of a curved outer feather boundary at a corner on a mask path. */
  featherRelCornerAngles: number[]
}

/** The ShapeLayer object represents a shape layer within a composition. Create it using the LayerCollection object’s addShape() method. */
declare class ShapeLayer extends AVLayer {}

/** The SolidSource object represents a solid-color footage source. */
declare class SolidSource extends FootageSource {
  /** The color of the solid. */
  color: ThreeDColorValue
}

/** The file specification, an ExtendScript File object. */
declare interface _Swatch {
  /** The ASE version number. */
  majorVersion: number

  /** The ASE version number. */
  minorVersion: number

  /** An array of SwatchValue. */
  values: _SwatchValue[]
}

/** The file specification, an ExtendScript File object. */
declare interface _SwatchValue {
  /** One of "RGB", "CMYK", "LAB", "Gray" */
  type: "RGB" | "CMYK" | "LAB" | "Gray"

  /** When type = "RGB", the color values in the range [0.0..1.0]. 0, 0, 0 is Black. */
  r: number
  g: number
  b: number

  /** When type = "CMYK", the color values in the range [0.0..1.0]. 0, 0, 0, 0 is White. */
  c: number
  m: number
  y: number
  k: number

  /** When type = "LAB", the color values. L is in the range [0.0..1.0]. a and b are in the range [-128.0..+128.0] 0, 0, 0 is Black. */
  L: number
  a: number
  // b: number;

  /** When type = "Gray", the value range is [0.0..1.0]. 0.0 is Black. */
  gray: number
  value: number
}

/** The System object provides access to attributes found on the user’s system, such as the user name and the name and version of the operating system. It is available through the system global variable. */
declare class System {
  /** The current user name. */
  readonly userName: string

  /** The name of the host computer. */
  readonly machineName: string

  /** The name of the operating system. */
  readonly osName: string

  /** The version of the operating system. */
  readonly osVersion: string

  /** Execute’s a command on the system’s command line. */
  callSystem(cmdLineToExecute: string): string
}

/** The TextDocument object stores a value for a TextLayer's Source Text property. Create it with the constructor, passing the string to be encapsulated. */
declare class TextDocument {
  constructor(docText: string)

  /** When true, the text layer is point (unbounded) text. */
  readonly pointText: boolean

  /** When true, the text layer is paragraph (bounded) text. */
  readonly boxText: boolean

  /** Path of font file, providing its location on disk (not guaranteed to be returned for all font types; return value may be empty string for some kinds of fonts) */
  readonly fontLocation: string

  /** Style information — e.g., “bold”, “italic” */
  readonly fontStyle: string

  /** The name of the font family */
  readonly fontFamily: string

  /** True if a text layer has faux bold enabled */
  readonly fauxBold: boolean

  /** True if a text layer has faux italic enabled */
  readonly fauxItalic: boolean

  /** True if a text layer has allcaps enabled */
  readonly allCaps: boolean

  /** True if a text layer has smallcaps enabled */
  readonly smallCaps: boolean

  /** True if a text layer has superscript enabled- */
  readonly superscript: boolean

  /** True if a text layer has subscript enabled- */
  readonly subscript: boolean

  /** This text layer’s vertical scale in pixels. */
  readonly verticalScale: number

  /** This text layer’s horizontal scale in pixels. */
  readonly horizontalScale: number

  /** This text layer’s baseline shift in pixels. */
  readonly baselineShift: number

  /** This text layer’s tsume value. */
  readonly tsume: number

  /** The layer coordinates from a paragraph (box) text layer’s anchor point as a [width, height] array of pixel dimensions. */
  readonly boxTextPos: [number, number]

  /** The baseline (x,y) locations for a text layer. */
  readonly baselineLocs: number[]

  /** The text layer’s Source Text value. */
  text: string

  /** When true, the text layer shows a fill. */
  applyFill: boolean

  /** When true, the text layer shows a stroke. */
  applyStroke: boolean

  /** The text layer’s fill color. */
  fillColor: ThreeDColorValue

  /** The text layer’s font specified by its PostScript name. */
  font: string

  /** The text layer’s font size in pixels. */
  fontSize: number

  /** The paragraph justification for the text layer. */
  justification: ParagraphJustification

  /** The text layer’s spacing between lines. */
  leading: number

  /** The text layer’s stroke color. */
  strokeColor: ThreeDColorValue

  /** Indicates the rendering order for the fill and stroke of a text layer. */
  strokeOverFill: boolean

  /** The text layer’s stroke thickness. */
  strokeWidth: number

  /** The text layer’s spacing between characters. */
  tracking: number

  /** For box text, the pixel dimensions for the text bounds. */
  boxTextSize: [number, number]

  /** Restores the default character settings in the Character panel. */
  resetCharStyle(): void

  /** Restores the default paragraph settings in the Paragraph panel. */
  resetParagraphStyle(): void
}

/** The TextLayer object represents a text layer within a composition. Create it using the LayerCollection object’s addText method. */
declare class TextLayer extends AVLayer {
  readonly source: null

  readonly text: _TextProperties
  readonly sourceText: TextDocumentProperty
}

declare class View {
  readonly active: boolean
  readonly options: ViewOptions

  setActive(): void
}

/** The Viewer object represents a Composition, Layer, or Footage panel. */
declare class Viewer {
  /** The type of content in the viewer. */
  readonly type: ViewerType

  /** When true, the viewer is focused. */
  readonly active: boolean

  readonly views: View[]

  activeViewIndex: number

  /** When true, the viewer is at its maximized size. */
  maximized: boolean

  /** Moves the viewer to front and places focus on it. */
  setActive(): boolean
}

declare class ViewOptions {
  /** The state of the Channels menu */
  channels: ChannelType

  /** When true, checkerboards are on */
  checkerboards: boolean

  /** Current exposure setting */
  exposure: number

  /** The state of the Fast Previews menu */
  fastPreview: FastPreviewType

  /** When true, indicates guides are locked in the viewer. */
  guidesLocked: boolean

  /** When true, indicates layers snap to guides when dragged in the viewer. */
  guidesSnap: boolean

  /** When true, indicates guides are visible in the viewer. */
  guidesVisibility: boolean

  /** When true, indicates rulers are shown in the viewer. */
  rulers: boolean

  /** The viewer Zoom value */
  zoom: number
}

/**
 * Properties for Shortcuts
 */
declare interface _TransformGroup extends PropertyGroup {
  readonly anchorPoint: TwoDOrThreeDProperty
  readonly position: TwoDOrThreeDProperty
  readonly xPosition: OneDProperty
  readonly yPosition: OneDProperty
  readonly zPosition: OneDProperty
  readonly scale: TwoDOrThreeDProperty
  readonly orientation: ThreeDProperty
  readonly rotation: OneDProperty
  readonly xRotation: OneDProperty
  readonly yRotation: OneDProperty
  readonly zRotation: OneDProperty
  readonly opacity: OneDProperty
  readonly pointOfInterest: ThreeDProperty
}

declare interface _LightOptionsGroup extends PropertyGroup {
  readonly intensity: OneDProperty
  readonly color: ColorProperty
  readonly coneAngle: OneDProperty
  readonly coneFeather: OneDProperty
  readonly falloff: OneDProperty
  readonly radius: OneDProperty
  readonly falloffDistance: OneDProperty
  readonly castsShadows: OneDProperty
  readonly shadowDarkness: OneDProperty
  readonly shadowDiffusion: OneDProperty
}

declare interface _CameraOptionsGroup extends PropertyGroup {
  readonly zoom: OneDProperty
  readonly depthOfField: OneDProperty
  readonly focusDistance: OneDProperty
  readonly aperture: OneDProperty
  readonly blurLevel: OneDProperty
  readonly irisShape: OneDProperty
  readonly irisRotation: OneDProperty
  readonly irisRoundness: OneDProperty
  readonly irisAspectRatio: OneDProperty
  readonly irisDiffractionFringe: OneDProperty
  readonly highlightGain: OneDProperty
  readonly highlightThreshold: OneDProperty
  readonly highlightSaturation: OneDProperty
}

declare interface _LayerStyles extends PropertyGroup {
  readonly blendingOption: _BlendOptionsGroup
  readonly dropShadow: _DropShadow
  readonly innerShadow: _InnerShadow
  readonly outerGlow: _OuterGlow
  readonly innerGlow: _InnerGlow
  readonly bevelAndEmboss: _BevelAndEmboss
  readonly satin: _Satin
  readonly colorOverlay: _ColorOverlay
  readonly gradientOverlay: _GradientOverlay
  readonly stroke: _Stroke
}

declare interface _BlendOptionsGroup extends PropertyGroup {
  readonly globalLightAngle: OneDProperty
  readonly globalLightAltitude: OneDProperty
  readonly advancedBlending: _AdvBlendGroup
}

declare interface _AdvBlendGroup extends PropertyGroup {
  readonly fillOpacity: OneDProperty
  readonly red: OneDProperty
  readonly green: OneDProperty
  readonly blue: OneDProperty
  readonly blendInteriorStylesAsGroup: OneDProperty
  readonly useBlendRangesFromSource: OneDProperty
}

declare interface _DropShadow extends PropertyGroup {
  readonly blendMode: OneDProperty
  readonly color: ColorProperty
  readonly opacity: OneDProperty
  readonly useGlobalLight: OneDProperty
  readonly angle: OneDProperty
  readonly distance: OneDProperty
  readonly spread: OneDProperty
  readonly size: OneDProperty
  readonly noise: OneDProperty
  readonly layerKnocksOutDropShadow: OneDProperty
}

declare interface _InnerShadow extends PropertyGroup {
  readonly blendMode: OneDProperty
  readonly color: ColorProperty
  readonly opacity: OneDProperty
  readonly useGlobalLight: OneDProperty
  readonly angle: OneDProperty
  readonly distance: OneDProperty
  readonly choke: OneDProperty
  readonly size: OneDProperty
  readonly noise: OneDProperty
}

declare interface _OuterGlow extends PropertyGroup {
  readonly blendMode: OneDProperty
  readonly opacity: OneDProperty
  readonly noise: OneDProperty
  readonly colorType: OneDProperty
  readonly color: ColorProperty
  readonly colors: NoValueProperty
  readonly gradientSmoothness: OneDProperty
  readonly technique: OneDProperty
  readonly spread: OneDProperty
  readonly size: OneDProperty
  readonly range: OneDProperty
  readonly jitter: OneDProperty
}

declare interface _InnerGlow extends PropertyGroup {
  readonly blendMode: OneDProperty
  readonly opacity: OneDProperty
  readonly noise: OneDProperty
  readonly colorType: OneDProperty
  readonly color: ColorProperty
  readonly colors: NoValueProperty
  readonly gradientSmoothness: OneDProperty
  readonly technique: OneDProperty
  readonly source: OneDProperty
  readonly choke: OneDProperty
  readonly size: OneDProperty
  readonly range: OneDProperty
  readonly jitter: OneDProperty
}

declare interface _BevelAndEmboss extends PropertyGroup {
  readonly style: OneDProperty
  readonly technique: OneDProperty
  readonly depth: OneDProperty
  readonly direction: OneDProperty
  readonly size: OneDProperty
  readonly soften: OneDProperty
  readonly useGlobalLight: OneDProperty
  readonly angle: OneDProperty
  readonly altitude: OneDProperty
  readonly highlightMode: OneDProperty
  readonly highlightColor: ColorProperty
  readonly highlightOpacity: OneDProperty
  readonly shadowMode: OneDProperty
  readonly shadowColor: ColorProperty
  readonly shadowOpacity: OneDProperty
}

declare interface _Satin extends PropertyGroup {
  readonly blendMode: OneDProperty
  readonly color: ColorProperty
  readonly opacity: OneDProperty
  readonly angle: OneDProperty
  readonly distance: OneDProperty
  readonly size: OneDProperty
  readonly invert: OneDProperty
}

declare interface _ColorOverlay extends PropertyGroup {
  readonly blendMode: OneDProperty
  readonly color: ColorProperty
  readonly opacity: OneDProperty
}

declare interface _GradientOverlay extends PropertyGroup {
  readonly blendMode: OneDProperty
  readonly opacity: OneDProperty
  readonly colors: NoValueProperty
  readonly gradientSmoothness: OneDProperty
  readonly angle: OneDProperty
  readonly style: OneDProperty
  readonly reverse: OneDProperty
  readonly alignWithLayer: OneDProperty
  readonly scale: OneDProperty
  readonly offset: TwoDProperty
}

declare interface _Stroke extends PropertyGroup {
  readonly color: ColorProperty
  readonly blendMode: OneDProperty
  readonly size: OneDProperty
  readonly opacity: OneDProperty
  readonly position: OneDProperty
}

declare interface _GeometryOptionsGroup extends PropertyGroup {
  readonly curvature: OneDProperty
  readonly segments: OneDProperty

  readonly bevelStyle: OneDProperty
  readonly bevelDepth: OneDProperty
  readonly holeBevelDepth: OneDProperty
  readonly extrusionDepth: OneDProperty
}

declare interface _MaterialOptionsGroup extends PropertyGroup {
  readonly castsShadows: OneDProperty
  readonly lightTransmission: OneDProperty
  readonly acceptsShadows: OneDProperty
  readonly acceptsLights: OneDProperty
  readonly appearsInReflections: OneDProperty
  readonly ambient: OneDProperty
  readonly diffuse: OneDProperty
  readonly specularIntensity: OneDProperty
  readonly specularShininess: OneDProperty
  readonly metal: OneDProperty
  readonly reflectionIntensity: OneDProperty
  readonly reflectionSharpness: OneDProperty
  readonly reflectionRolloff: OneDProperty
  readonly transparency: OneDProperty
  readonly transparencyRolloff: OneDProperty
  readonly indexOfRefraction: OneDProperty
}

declare interface _AudioGroup extends PropertyGroup {
  readonly audioLevels: TwoDProperty
}

declare interface _TextProperties extends PropertyGroup {
  readonly sourceText: TextDocumentProperty
  readonly pathOption: _TextPathOptions
  readonly moreOption: _TextMoreOptions
}

declare interface _TextPathOptions extends PropertyGroup {
  readonly path: OneDProperty
}

declare interface _TextMoreOptions extends PropertyGroup {
  readonly anchorPointGrouping: OneDProperty
  readonly groupingAlignment: TwoDProperty
  readonly fillANdStroke: OneDProperty
  readonly interCharacterBlending: OneDProperty
}
