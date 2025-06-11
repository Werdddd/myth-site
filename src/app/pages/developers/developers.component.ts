import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-developers',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './developers.component.html',
  styleUrl: './developers.component.css'
})


export class DevelopersComponent {
  selectedMember: any = null;

  teamMembers = [
    {
      name: 'Angel Mikka Onishi',
      title: 'Student Teacher / Developer',
      realImage: '../../../assets/images/real3.jpg',
      avatarImage: '../../../assets/images/avatar3.jpg',
      bio: 'Hello! I’m Angel Onishi, a student educator pursuing a Bachelor’s degree in Secondary Education, majoring in English, at the Polytechnic University of the Philippines (PUP). My love for literature aligns with my passion to accessible education. This website reflects my commitment to inclusive education by offering flexible materials for diverse learners. I aim to create a space where students can explore at their own pace, encouraging independence, curiosity, and a deeper connection to learning through stories that inspire.',
      bioNote: 'Angel is passionate about teaching and full-stack development.'
    },
    {
      name: 'Hazel Anne Miranda',
      title: 'Student Teacher / Developer',
      realImage: '../../../assets/images/real2.jpg',
      avatarImage: '../../../assets/images/avatar2.jpg',
      bio: 'I’m Hazel Miranda, a student educator taking up a Bachelor’s degree in Secondary Education major in English at the Polytechnic University of the Philippines (PUP). As a proud iskolar ng bayan with a deep passion for literature, I created this educational website on creation mythology. Through this platform, I aim to spark curiosity, encourage critical thinking, and promote a deeper appreciation for world cultures, stories, and the timeless power of myth and literature.',
      bioNote: 'Hazel focuses on front-end and UX design.'
    },
    {
      name: 'Monique Viviene Santos',
      title: 'Student Teacher / Developer',
      realImage: '../../../assets/images/real4.jpg',
      avatarImage: '../../../assets/images/avatar4.jpg',
      bio: 'Hello! I’m Monique Viviene Santos, currently pursuing my Bachelor’s degree in Secondary Education, majoring in English, at the Polytechnic University of the Philippines. I’ve always been fascinated by how stories reflect culture, values, and imagination. As a future educator, I aim to make literature more meaningful and relatable to students. This website is a space where we explore creation myths—powerful tales that reveal how different people understood the beginning of everything. I hope these stories inspire you as much as they inspire me.',
      bioNote: 'Monique specializes in backend systems and cloud.'
    },
    {
      name: 'Mary Rhaizen Razo',
      title: 'Student Teacher / Developer',
      realImage: '../../../assets/images/real5.jpg',
      avatarImage: '../../../assets/images/avatar5.jpg',
      bio: 'Hello! I am Mary Rhaizen Razo, an Iskolar ng Bayan from the Polytechnic University of the Philippines.My dream led me to pursue a degree in Bachelor of Secondary Education, major in English, as I have always believed in the transformative power of education. My deep passion for teaching literature inspired me to create this educational website, a space dedicated to promoting inclusive learning where education does not end in the classroom, because learning is for life. Let us continue learning together, where every story teaches, and every lesson reaches.',
      bioNote: 'Mary handles system integration and QA testing.'
    },
    {
      name: 'Rhenz Malijan',
      title: 'Student Teacher / Developer',
      realImage: '../../../assets/images/real6.jpg',
      avatarImage: '../../../assets/images/avatar6.jpg',
      bio: 'Hello! I’m Rhenz Malijan, a student educator taking up my Bachelor’s degree in Secondary Education, major in English, at the Polytechnic University of the Philippines (PUP). My passion for literature is through reading and I hope to inspire my future students to enjoy literature too. I still have a lot to learn, but I always give my best to grow and be a good example. This website explores creation myths and aims to spark curiosity, understanding, and a deeper love for stories.',
      bioNote: 'Rhenz enjoys developing with Angular and Firebase.'
    },
    {
      name: 'Aliyah Marie Meraña',
      title: 'Student Teacher / Developer',
      realImage: '../../../assets/images/real7.jpg',
      avatarImage: '../../../assets/images/avatar7.jpg',
      bio: 'Hello! I’m Alliyah Marie Meraña, a third-year Bachelor of Secondary Education major in English at the Polytechnic University of the Philippines. As a future educator, I find joy in exploring how stories, especially myths and folklore, preserve cultural memory and ignite imagination. This project is my creative take on unraveling the symbolic and timeless nature of these narratives. I hope it encourages readers to appreciate the depth of ancient tales and the lessons they continue to offer today.',
      bioNote: 'Aliyah works on project coordination and documentation.'
    }
  ];

  openModal(member: any) {
    this.selectedMember = member;
  }

  closeModal() {
    this.selectedMember = null;
  }
}

