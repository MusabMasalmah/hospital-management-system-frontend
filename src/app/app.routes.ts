import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './componants/Specialization_Interface/specialization/add.component';
import { DoctorComponent } from './componants/Doctor_Interface/doctor/doctor.component';
import { PatientComponent } from './componants/Patinent_Interface/patient/patient.component';
import { MedicationComponent } from './componants/Medication_Interface/medication/medication.component';
import { AppointmentComponent } from './componants/Appointment_Interface/appointment/appointment.component';
import { RegisterComponent } from './componants/register/register.component';
import { LoginComponent } from './componants/login/login.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
    { path: 'specialization', component: AddComponent, canActivate: [authGuard] },
    { path: 'doctor', component: DoctorComponent, canActivate: [authGuard] },
    { path: 'patient', component: PatientComponent, canActivate: [authGuard] },
    { path: 'medication', component: MedicationComponent, canActivate: [authGuard] },
    { path: 'appointment', component: AppointmentComponent, canActivate: [authGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }  // Catch-all route
];


@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule],
    providers: []
}) 

export class AppRoutingModule{} 