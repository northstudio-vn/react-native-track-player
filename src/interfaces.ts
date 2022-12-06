import { NativeModules } from 'react-native';
const { TrackPlayerModule: TrackPlayer } = NativeModules;

export enum IOSCategory {
  /**
   * The category for playing recorded music or other sounds that are central
   * to the successful use of your app.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616509-playback
   **/
  Playback = 'playback',
  /**
   * The category for recording (input) and playback (output) of audio, such as
   * for a Voice over Internet Protocol (VoIP) app.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616568-playandrecord
   **/
  PlayAndRecord = 'playAndRecord',
  /**
   * The category for routing distinct streams of audio data to different
   * output devices at the same time.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616484-multiroute
   **/
  MultiRoute = 'multiRoute',
  /**
   * The category for an app in which sound playback is nonprimary — that is,
   * your app also works with the sound turned off.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616560-ambient
   **/
  Ambient = 'ambient',
  /**
   * The default audio session category.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616488-soloambient
   **/
  SoloAmbient = 'soloAmbient',
  /**
   * The category for recording audio while also silencing playback audio.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616451-record
   **/
  Record = 'record',
}

export enum IOSCategoryMode {
  /**
   * The default audio session mode.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616579-default
   **/
  Default = 'default',
  /**
   * A mode that the GameKit framework sets on behalf of an application that
   * uses GameKit’s voice chat service.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616511-gamechat
   **/
  GameChat = 'gameChat',
  /**
   * A mode that indicates that your app is performing measurement of audio
   * input or output.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616608-measurement
   **/
  Measurement = 'measurement',
  /** A mode that indicates that your app is playing back movie content.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616623-movieplayback
   **/
  MoviePlayback = 'moviePlayback',
  /** A mode used for continuous spoken audio to pause the audio when another
   * app plays a short audio prompt. See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616510-spokenaudio */
  SpokenAudio = 'spokenAudio',
  /**
   * A mode that indicates that your app is engaging in online video conferencing.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616590-videochat
   **/
  VideoChat = 'videoChat',
  /**
   * A mode that indicates that your app is recording a movie.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616535-videorecording
   **/
  VideoRecording = 'videoRecording',
  /**
   * A mode that indicates that your app is performing two-way voice communication,
   * such as using Voice over Internet Protocol (VoIP).
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/1616455-voicechat
   **/
  VoiceChat = 'voiceChat',
  /**
   * A mode that indicates that your app plays audio using text-to-speech.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/2962803-voiceprompt
   **/
  VoicePrompt = 'voicePrompt',
}

export enum IOSCategoryOptions {
  /**
   * An option that indicates whether audio from this session mixes with audio
   * from active sessions in other audio apps.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616611-mixwithothers
   **/
  MixWithOthers = 'mixWithOthers',
  /**
   * An option that reduces the volume of other audio sessions while audio from
   * this session plays.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616618-duckothers
   **/
  DuckOthers = 'duckOthers',
  /**
   * An option that determines whether to pause spoken audio content from other
   * sessions when your app plays its audio.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616534-interruptspokenaudioandmixwithot
   **/
  InterruptSpokenAudioAndMixWithOthers = 'interruptSpokenAudioAndMixWithOthers',
  /**
   * An option that determines whether Bluetooth hands-free devices appear as
   * available input routes.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616518-allowbluetooth
   **/
  AllowBluetooth = 'allowBluetooth',
  /**
   * An option that determines whether you can stream audio from this session
   * to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1771735-allowbluetootha2dp
   **/
  AllowBluetoothA2DP = 'allowBluetoothA2DP',
  /**
   * An option that determines whether you can stream audio from this session
   * to AirPlay devices.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1771736-allowairplay
   **/
  AllowAirPlay = 'allowAirPlay',
  /**
   * An option that determines whether audio from the session defaults to the
   * built-in speaker instead of the receiver.
   * See https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616462-defaulttospeaker
   **/
  DefaultToSpeaker = 'defaultToSpeaker',
}

export enum AndroidAudioContentType {
  /**
   * Content type value to use when the content type is music.
   *
   * See https://developer.android.com/reference/android/media/AudioAttributes#CONTENT_TYPE_MUSIC
   */
  Music = 'music',
  /**
   * Content type value to use when the content type is speech.
   *
   * See https://developer.android.com/reference/android/media/AudioAttributes#CONTENT_TYPE_SPEECH
   */
   Speech = 'speech',
  /**
   * Content type value to use when the content type is a sound used to
   * accompany a user action, such as a beep or sound effect expressing a key
   * click, or event, such as the type of a sound for a bonus being received in
   * a game. These sounds are mostly synthesized or short Foley sounds.
   *
   * See https://developer.android.com/reference/android/media/AudioAttributes#CONTENT_TYPE_SONIFICATION
   */
  Sonification = 'sonification',
  /**
   * Content type value to use when the content type is a soundtrack, typically
   * accompanying a movie or TV program.
   */
  Movie = 'movie',
  /**
   * Content type value to use when the content type is unknown, or other than
   * the ones defined.
   *
   * See https://developer.android.com/reference/android/media/AudioAttributes#CONTENT_TYPE_UNKNOWN
   */
   Unknown = 'unknown',
}

export interface PlayerOptions {
  /**
   * Minimum time in seconds that needs to be buffered.
   */
  minBuffer?: number;
  /**
   * Maximum time in seconds that needs to be buffered
   */
  maxBuffer?: number;
  /**
   * Time in seconds that should be kept in the buffer behind the current playhead time.
   */
  backBuffer?: number;
  /**
   * Minimum time in seconds that needs to be buffered to start playing.
   */
  playBuffer?: number;
  /**
   * Maximum cache size in kilobytes.
   */
  maxCacheSize?: number;
  /**
   * [AVAudioSession.Category](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616615-category)
   * for iOS. Sets on `play()`.
   */
  iosCategory?: IOSCategory;
  /**
   * (iOS only) The audio session mode, together with the audio session category,
   * indicates to the system how you intend to use audio in your app. You can use
   * a mode to configure the audio system for specific use cases such as video
   * recording, voice or video chat, or audio analysis.
   * Sets on `play()`.
   *
   * See https://developer.apple.com/documentation/avfoundation/avaudiosession/1616508-mode
   */
  iosCategoryMode?: IOSCategoryMode;
  /**
   * [AVAudioSession.CategoryOptions](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616503-categoryoptions) for iOS.
   * Sets on `play()`.
   */
  iosCategoryOptions?: IOSCategoryOptions[];
  /**
   * (Android only) The audio content type indicates to the android system how
   * you intend to use audio in your app.
   *
   * With `autoHandleInterruptions: true` and
   * `androidContentType: AndroidAudioContentType.Speech`, the audio will be
   * paused during short interruptions, such as when a message arrives.
   * Otherwise the playback volume is reduced while the notification is playing.
   *
   * @default AndroidAudioContentType.Music
   */
  androidAudioContentType?: AndroidAudioContentType;
  /**
   * Indicates whether the player should automatically delay playback in order to minimize stalling.
   * Defaults to `true`.
   * @deprecated This option has been nominated for removal in a future version
   * of RNTP. If you have this set to `true`, you can safely remove this from
   * the options. If you are setting this to `false` and have a reason for that,
   * please post a comment in the following discussion: https://github.com/doublesymmetry/react-native-track-player/pull/1695
   * and describe why you are doing so.
   */
  waitForBuffer?: boolean;
  /**
   * Indicates whether the player should automatically update now playing metadata data in control center / notification.
   * Defaults to `true`.
   */
  autoUpdateMetadata?: boolean;
  /**
   * Indicates whether the player should automatically handle audio interruptions.
   * Defaults to `false`.
   */
  autoHandleInterruptions?: boolean;
 }

export enum RatingType {
  Heart = TrackPlayer.RATING_HEART,
  ThumbsUpDown = TrackPlayer.RATING_THUMBS_UP_DOWN,
  ThreeStars = TrackPlayer.RATING_3_STARS,
  FourStars = TrackPlayer.RATING_4_STARS,
  FiveStars = TrackPlayer.RATING_5_STARS,
  Percentage = TrackPlayer.RATING_PERCENTAGE,
}

export interface FeedbackOptions {
  /** Marks wether the option should be marked as active or "done" */
  isActive: boolean;

  /** The title to give the action (relevant for iOS) */
  title: string;
}

export enum Capability {
  Play = TrackPlayer.CAPABILITY_PLAY,
  PlayFromId = TrackPlayer.CAPABILITY_PLAY_FROM_ID,
  PlayFromSearch = TrackPlayer.CAPABILITY_PLAY_FROM_SEARCH,
  Pause = TrackPlayer.CAPABILITY_PAUSE,
  Stop = TrackPlayer.CAPABILITY_STOP,
  SeekTo = TrackPlayer.CAPABILITY_SEEK_TO,
  Skip = TrackPlayer.CAPABILITY_SKIP,
  SkipToNext = TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
  SkipToPrevious = TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  JumpForward = TrackPlayer.CAPABILITY_JUMP_FORWARD,
  JumpBackward = TrackPlayer.CAPABILITY_JUMP_BACKWARD,
  SetRating = TrackPlayer.CAPABILITY_SET_RATING,
  Like = TrackPlayer.CAPABILITY_LIKE,
  Dislike = TrackPlayer.CAPABILITY_DISLIKE,
  Bookmark = TrackPlayer.CAPABILITY_BOOKMARK,
}

export type ResourceObject = number;

/**
 * Define how the audio playback should behave to removing the app from recents (killing it). Default is `ContinuePlayback`.
 */
export enum AppKilledPlaybackBehavior {
  /**
   * This option will continue playing audio in the background when the app is removed from recents. The notification remains. This is the default.
   */
  ContinuePlayback = 'continue-playback',

  /**
   * This option will pause playing audio in the background when the app is removed from recents. The notification remains and can be used to resume playback.
   */
  PausePlayback = 'pause-playback',

  /**
   * This option will stop playing audio in the background when the app is removed from recents. The notification is removed and can't be used to resume playback. Users would need to open the app again to start playing audio.
   */
  StopPlaybackAndRemoveNotification = 'stop-playback-and-remove-notification',
}

export interface AndroidOptions {
  /**
   * Whether the audio playback notification is also removed when the playback
   * stops. **If `stoppingAppPausesPlayback` is set to false, this will be
   * ignored.**
   */
  appKilledPlaybackBehavior?: AppKilledPlaybackBehavior;
  alwaysPauseOnInterruption?: boolean
}

export interface UpdateOptions {
  android?: AndroidOptions;
  ratingType?: RatingType;
  forwardJumpInterval?: number;
  backwardJumpInterval?: number;
  progressUpdateEventInterval?: number; // in seconds

  // ios
  likeOptions?: FeedbackOptions;
  dislikeOptions?: FeedbackOptions;
  bookmarkOptions?: FeedbackOptions;

  capabilities?: Capability[];

  // android
  /**
   * @deprecated Use `android` options and `appKilledPlaybackMode` instead.
   * @example
   * ```
   * await TrackPlayer.updateOptions({
   *   android: {
   *     appKilledPlaybackMode: AppKilledPlaybackMode.PausePlayback
   *  },
   * });
   *  ```
   */
  stoppingAppPausesPlayback?: boolean;
  /**
   * @deprecated use `TrackPlayer.updateOptions({ android: { alwaysPauseOnInterruption: boolean }})` instead
   */
  alwaysPauseOnInterruption?: boolean;
  notificationCapabilities?: Capability[];
  compactCapabilities?: Capability[];

  icon?: ResourceObject;
  playIcon?: ResourceObject;
  pauseIcon?: ResourceObject;
  stopIcon?: ResourceObject;
  previousIcon?: ResourceObject;
  nextIcon?: ResourceObject;
  rewindIcon?: ResourceObject;
  forwardIcon?: ResourceObject;
  color?: number;
}

/** @deprecated use UpdateOptions instead */
export type MetadataOptions = UpdateOptions

export enum Event {
  /** Fired when the state of the player changes. */
  PlaybackState = 'playback-state',
  /** Fired when a playback error occurs. */
  PlaybackError = 'playback-error',
  /** Fired after playback has paused due to the queue having reached the end. */
  PlaybackQueueEnded = 'playback-queue-ended',
  /**
   * Fired when another track has become active or when there no longer is an
   * active track.
   *
   * @deprecated use `playback-active-track-changed` instead.
   **/
  PlaybackTrackChanged = 'playback-track-changed',
  /**
   * Fired when another track has become active or when there no longer is an
   * active track.
   **/
  PlaybackActiveTrackChanged = 'playback-active-track-changed',
  /**
   * Fired when the current track receives metadata encoded in. (e.g. ID3 tags,
   * Icy Metadata, Vorbis Comments or QuickTime metadata).
   **/
  PlaybackMetadataReceived = 'playback-metadata-received',
  /**
   * Fired when playback play when ready has changed.
   **/
  PlaybackPlayWhenReadyChanged = 'playback-play-when-ready-changed',
  /**
   * Fired when playback progress has been updated.
   * See https://react-native-track-player.js.org/docs/api/events#playbackprogressupdated
   **/
  PlaybackProgressUpdated = 'playback-progress-updated',
  /**
   * Fired when sleep timer has changed.
   **/
  SleepTimerChanged = 'sleep-timer-changed',
  /**
   * Fired when sleep timer has completed.
   **/
   SleepTimerComplete = 'sleep-timer-complete',
  /**
   * Fired when the user presses the play button.
   * See https://react-native-track-player.js.org/docs/api/events#remoteplay
   **/
  RemotePlay = 'remote-play',
  /**
   * Fired when the user presses the pause button.
   * See https://react-native-track-player.js.org/docs/api/events#remotepause
   **/
  RemotePause = 'remote-pause',
  /**
   * Fired when the user presses the stop button.
   * See https://react-native-track-player.js.org/docs/api/events#remotestop
   **/
  RemoteStop = 'remote-stop',
  /**
   * Fired when the user presses the next track button.
   * See https://react-native-track-player.js.org/docs/api/events#remotenext
   **/
  RemoteNext = 'remote-next',
  /**
   * Fired when the user presses the previous track button.
   * See https://react-native-track-player.js.org/docs/api/events#remoteprevious
   **/
  RemotePrevious = 'remote-previous',
  /**
   * Fired when the user presses the jump forward button.
   * See https://react-native-track-player.js.org/docs/api/events#remotejumpforward
   **/
  RemoteJumpForward = 'remote-jump-forward',
  /**
   * Fired when the user presses the jump backward button.
   * See https://react-native-track-player.js.org/docs/api/events#remotejumpbackward
   **/
  RemoteJumpBackward = 'remote-jump-backward',
  /**
   * Fired when the user changes the position of the timeline.
   * See https://react-native-track-player.js.org/docs/api/events#remoteseek
   **/
  RemoteSeek = 'remote-seek',
  /**
   * Fired when the user changes the rating for the track remotely.
   * See https://react-native-track-player.js.org/docs/api/events#remotesetrating
   **/
  RemoteSetRating = 'remote-set-rating',
  /**
   * Fired when the app needs to handle an audio interruption.
   * See https://react-native-track-player.js.org/docs/api/events#remoteduck
   **/
  RemoteDuck = 'remote-duck',
  /**
   * (iOS only) Fired when the user presses the like button in the now playing
   * center.
   * See https://react-native-track-player.js.org/docs/api/events#remotelike-ios-only
   **/
  RemoteLike = 'remote-like',
  /**
   * (iOS only) Fired when the user presses the dislike button in the now playing
   * center.
   * See https://react-native-track-player.js.org/docs/api/events#remotedislike-ios-only
   **/
  RemoteDislike = 'remote-dislike',
  /** (iOS only) Fired when the user presses the bookmark button in the now
   * playing center.
   * See https://react-native-track-player.js.org/docs/api/events#remotebookmark-ios-only
   **/
  RemoteBookmark = 'remote-bookmark',
  /**
   * (Android only) Fired when the user selects a track from an external device.
   * See https://react-native-track-player.js.org/docs/api/events#remoteplayid
   **/
  RemotePlayId = 'remote-play-id',
  /**
   * (Android only) Fired when the user searches for a track (usually voice search).
   * See https://react-native-track-player.js.org/docs/api/events#remoteplaysearch
   **/
  RemotePlaySearch = 'remote-play-search',
  /**
   * (Android only) Fired when the user presses the skip button.
   * See https://react-native-track-player.js.org/docs/api/events#remoteskip
   **/
  RemoteSkip = 'remote-skip',
}

export enum TrackType {
  Default = 'default',
  Dash = 'dash',
  HLS = 'hls',
  SmoothStreaming = 'smoothstreaming',
}

export enum RepeatMode {
  /** Playback stops when the last track in the queue has finished playing. */
  Off = TrackPlayer.REPEAT_OFF,
  /** Repeats the current track infinitely during ongoing playback. */
  Track = TrackPlayer.REPEAT_TRACK,
  /** Repeats the entire queue infinitely. */
  Queue = TrackPlayer.REPEAT_QUEUE,
}

export enum PitchAlgorithm {
  /**
   * A high-quality time pitch algorithm that doesn’t perform pitch correction.
   * */
  Linear = TrackPlayer.PITCH_ALGORITHM_LINEAR,
  /**
   * A highest-quality time pitch algorithm that’s suitable for music.
   **/
  Music = TrackPlayer.PITCH_ALGORITHM_MUSIC,
  /**
   * A modest quality time pitch algorithm that’s suitable for voice.
   **/
  Voice = TrackPlayer.PITCH_ALGORITHM_VOICE,
}

export enum State {
  /** Indicates that no media is currently loaded */
  None = 'none',
  /** Indicates that the player is paused, but ready to start playing */
  Ready = 'ready',
  /** Indicates that the player is currently playing */
  Playing = 'playing',
  /** Indicates that the player is currently paused */
  Paused = 'paused',
  /** Indicates that the player is currently stopped */
  Stopped = 'stopped',
  /** Indicates that the initial load of the item is occurring. */
  Loading = 'loading',
  /**
   * @deprecated Use `State.Loading` instead.
   **/
  Connecting = 'loading',
  /**
   * Indicates that the player is currently loading more data before it can
   * continue playing or is ready to start playing.
   */
  Buffering = 'buffering',
  /**
   * Indicates that playback of the current item failed. Call `TrackPlayer.getError()`
   * to get more information on the type of error that occurred.
   * Call `TrackPlayer.retry()` or `TrackPlayer.play()` to try to play the item
   * again.
   */
  Error = 'error',
  /**
   * Indicates that playback stopped due to the end of the queue being reached.
   */
  Ended = 'ended',
}

export interface TrackMetadataBase {
  /** The track title */
  title?: string;
  /** The track album */
  album?: string;
  /** The track artist */
  artist?: string;
  /** The track duration in seconds */
  duration?: number;
  /** The track artwork */
  artwork?: string | ResourceObject;
  /** track description */
  description?: string;
  /** The track genre */
  genre?: string;
  /** The track release date in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) */
  date?: string;
  /** The track rating */
  rating?: RatingType;
  /**
   * (iOS only) Whether the track is presented in the control center as being
   * live
   **/
  isLiveStream?: boolean;
}

export interface NowPlayingMetadata extends TrackMetadataBase {
  elapsedTime?: number;
}

export interface Track extends TrackMetadataBase {
  url: string | ResourceObject;
  type?: TrackType;
  /** The user agent HTTP header */
  userAgent?: string;
  /** Mime type of the media file */
  contentType?: string;
  /** (iOS only) The pitch algorithm to apply to the sound. */
  pitchAlgorithm?: PitchAlgorithm;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: { [key: string]: any };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Progress {
  /**
   * The playback position of the current track in seconds.
   * See https://react-native-track-player.js.org/docs/api/functions/player#getposition
   **/
  position: number;
  /** The duration of the current track in seconds.
   * See https://react-native-track-player.js.org/docs/api/functions/player#getduration
   **/
  duration: number;
  /**
   * The buffered position of the current track in seconds.
   **/
  buffered: number;
}

export interface PlaybackProgressUpdatedEvent extends Progress {
  track: number;
}

export type SleepTimer =
| { time: number }
| { sleepWhenPlayedToEnd: boolean }
| null

export type SleepTimerChangedEvent = SleepTimer;

export type PlaybackState =
  | {
      state:
        | State.None
        | State.Buffering
        | State.Loading
        | State.Playing
        | State.Paused
        | State.Ready
        | State.Paused
        | State.Stopped;
    }
  | {
      state: State.Error;
      error: PlaybackErrorEvent;
    };

export interface PlaybackErrorEvent {
  /** The error code */
  code: string;
  /** The error message */
  message: string;
}

export interface PlaybackQueueEndedEvent {
  /** The index of the active track when the playback queue ended. */
  track: number;
  /**
   * The playback position in seconds of the active track when the playback
   * queue ended.
   **/
  position: number;
}

/**
 * @deprecated
 */
export interface PlaybackTrackChangedEvent {
  /** The index of previously active track. */
  track: number | null;
  /** The previous track position in seconds. */
  position: number;
  /** The next (active) track index. */
  nextTrack: number;
}

export interface PlaybackActiveTrackChangedEvent {
  /** The index of previously active track. */
  lastIndex?: number;

  /**
   * The previously active track or `undefined` when there wasn't a previously
   * active track.
   */
  lastTrack?: Track;

  /**
   * The position of the previously active track in seconds.
   */
  lastPosition: number;

  /**
   * The newly active track index or `undefined` if there is no longer an
   * active track.
   */
  index?: number;

  /**
   * The newly active track or `undefined` if there is no longer an
   * active track.
   */
  track?: Track;
}

export interface PlaybackPlayWhenReadyChangedEvent {
  /** Whether the player will play when it is ready to do so. */
  playWhenReady: boolean;
}

export interface PlaybackMetadataReceivedEvent {
  /** The metadata source  */
  source: string;
  /** The track title */
  title: string | null;
  /** The track url */
  url: string | null;
  /** The track artist */
  artist: string | null;
  /** The track album */
  album: string | null;
  /** The track date */
  date: string | null;
  /** The track genre */
  genre: string | null;
}

export interface RemotePlayIdEvent {
  /** The track id */
  id: string;
}

export interface RemotePlaySearchEvent {
  query: string;
  focus: 'artist' | 'album' | 'playlist' | 'genre';
  title: string;
  artist: string;
  album: string;
  date: string;
  playlist: string;
}

export interface RemoteSkipEvent {
  index: number;
}

export interface RemoteJumpForwardEvent {
  /**
   * The number of seconds to jump forward.
   * See https://react-native-track-player.js.org/docs/api/events#remotejumpforward
   **/
  interval: number;
}

export interface RemoteJumpBackwardEvent {
  /**
   * The number of seconds to jump backward.
   * See https://react-native-track-player.js.org/docs/api/events#remotejumpbackward
   **/
  interval: number;
}

export interface RemoteSeekEvent {
  /** The position to seek to in seconds. */
  position: number;
}

export interface RemoteSetRatingEvent {
  rating: RatingType;
}

export interface RemoteDuckEvent {
  /**
   * On Android when true the player should pause playback, when false the
   * player may resume playback. On iOS when true the playback was paused and
   * when false the player may resume playback.
   **/
  paused: boolean;
  /**
   * Whether the interruption is permanent. On Android the player should stop
   * playback.
   **/
  permanent: boolean;
}
export interface EventPayloadByEvent {
  [Event.PlaybackState]: PlaybackState;
  [Event.PlaybackError]: PlaybackErrorEvent;
  [Event.PlaybackQueueEnded]: PlaybackQueueEndedEvent;
  [Event.PlaybackTrackChanged]: PlaybackTrackChangedEvent;
  [Event.PlaybackActiveTrackChanged]: PlaybackActiveTrackChangedEvent;
  [Event.PlaybackMetadataReceived]: PlaybackMetadataReceivedEvent;
  [Event.PlaybackPlayWhenReadyChanged]: PlaybackPlayWhenReadyChangedEvent;
  [Event.PlaybackProgressUpdated]: PlaybackProgressUpdatedEvent;
  [Event.SleepTimerChanged]: SleepTimerChangedEvent;
  [Event.SleepTimerComplete]: never;
  [Event.RemotePlay]: never;
  [Event.RemotePlayId]: RemotePlayIdEvent;
  [Event.RemotePlaySearch]: RemotePlaySearchEvent;
  [Event.RemotePause]: never;
  [Event.RemoteStop]: never;
  [Event.RemoteSkip]: RemoteSkipEvent;
  [Event.RemoteNext]: never;
  [Event.RemotePrevious]: never;
  [Event.RemoteJumpForward]: RemoteJumpForwardEvent;
  [Event.RemoteJumpBackward]: RemoteJumpBackwardEvent;
  [Event.RemoteSeek]: RemoteSeekEvent;
  [Event.RemoteSetRating]: RemoteSetRatingEvent;
  [Event.RemoteDuck]: RemoteDuckEvent;
  [Event.RemoteLike]: never;
  [Event.RemoteDislike]: never;
  [Event.RemoteBookmark]: never;
}

export interface EventsPayloadByEvent {
  [Event.PlaybackState]: PlaybackState & { type: Event.PlaybackState };
  [Event.PlaybackError]: PlaybackErrorEvent & { type: Event.PlaybackError };
  [Event.PlaybackQueueEnded]: PlaybackQueueEndedEvent & {
    type: Event.PlaybackQueueEnded;
  };
  [Event.PlaybackTrackChanged]: PlaybackTrackChangedEvent & {
    type: Event.PlaybackTrackChanged;
  };
  [Event.PlaybackActiveTrackChanged]: PlaybackActiveTrackChangedEvent & {
    type: Event.PlaybackActiveTrackChanged;
  };
  [Event.PlaybackMetadataReceived]: PlaybackMetadataReceivedEvent & {
    type: Event.PlaybackMetadataReceived;
  };
  [Event.PlaybackPlayWhenReadyChanged]: PlaybackPlayWhenReadyChangedEvent & {
    type: Event.PlaybackPlayWhenReadyChanged;
  };
  [Event.PlaybackProgressUpdated]: PlaybackProgressUpdatedEvent & {
    type: Event.PlaybackProgressUpdated;
  };
  [Event.SleepTimerChanged]: SleepTimerChangedEvent & {
    type: Event.SleepTimerChanged;
  };
  [Event.SleepTimerComplete]: { type: Event.SleepTimerComplete; };
  [Event.RemotePlay]: { type: Event.RemotePlay };
  [Event.RemotePlayId]: RemotePlayIdEvent & { type: Event.RemotePlayId };
  [Event.RemotePlaySearch]: RemotePlaySearchEvent & {
    type: Event.RemotePlaySearch;
  };
  [Event.RemotePause]: { type: Event.RemotePause };
  [Event.RemoteStop]: { type: Event.RemoteStop };
  [Event.RemoteSkip]: RemoteSkipEvent & { type: Event.RemoteSkip };
  [Event.RemoteNext]: { type: Event.RemoteNext };
  [Event.RemotePrevious]: { type: Event.RemotePrevious };
  [Event.RemoteJumpForward]: RemoteJumpForwardEvent & {
    type: Event.RemoteJumpForward;
  };
  [Event.RemoteJumpBackward]: RemoteJumpBackwardEvent & {
    type: Event.RemoteJumpBackward;
  };
  [Event.RemoteSeek]: RemoteSeekEvent & { type: Event.RemoteSeek };
  [Event.RemoteSetRating]: RemoteSetRatingEvent & {
    type: Event.RemoteSetRating;
  };
  [Event.RemoteDuck]: RemoteDuckEvent & { type: Event.RemoteDuck };
  [Event.RemoteLike]: { type: Event.RemoteLike };
  [Event.RemoteDislike]: { type: Event.RemoteDislike };
  [Event.RemoteBookmark]: { type: Event.RemoteBookmark };
}
