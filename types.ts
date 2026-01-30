
export interface Project {
  id: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
}

export interface UserProfile {
  name: string;
  designation: string;
  bio: string;
  profilePic: string;
  licenseNo: string;
}

export interface SisterConcern {
  name: string;
  description: string;
}
