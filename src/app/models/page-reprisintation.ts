import { DoctorComponent } from "../componants/Doctor_Interface/doctor/doctor.component";
import { DoctorReprisintation } from "./doctor-reprisintation";

export interface PageRepresentation {
    content: DoctorReprisintation[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    empty: boolean;
  }