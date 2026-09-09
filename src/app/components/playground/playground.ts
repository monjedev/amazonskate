import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ATHLETES } from '../../core/mocks/athletes-mock';
import { CLUB_ATHLETES, MANAGER_KPIS } from '../../core/mocks/dashboard-mock';
import { PRODUCTS, SHOP_CATEGORIES } from '../../core/mocks/shop-mock';
import { Avatar } from '../advanced-atoms/avatar/avatar';
import { Popover } from '../advanced-atoms/popover/popover';
import { PriceDisplay } from '../advanced-atoms/price-display/price-display';
import { ProgressBar } from '../advanced-atoms/progress-bar/progress-bar';
import { Rating } from '../advanced-atoms/rating/rating';
import { Slider } from '../advanced-atoms/slider/slider';
import { Stepper } from '../advanced-atoms/stepper/stepper';
import { Tag } from '../advanced-atoms/tag/tag';
import { Tooltip } from '../advanced-atoms/tooltip/tooltip';
import { Breadcrumb } from '../advanced-molecules/breadcrumb/breadcrumb';
import { Drawer } from '../advanced-molecules/drawer/drawer';
import { Dropdown } from '../advanced-molecules/dropdown/dropdown';
import { Modal } from '../advanced-molecules/modal/modal';
import { Pagination } from '../advanced-molecules/pagination/pagination';
import { Toast } from '../advanced-molecules/toast/toast';
import { Badge } from '../atoms/badge/badge';
import { Button } from '../atoms/button/button';
import { CheckboxComponent } from '../atoms/checkbox-component/checkbox-component';
import { InputField } from '../atoms/input-field/input-field';
import { Radio } from '../atoms/radio/radio';
import { NavItem } from '../molecules/nav-item/nav-item';
import { ProductCard } from '../molecules/product-card/product-card';
import { SearchBar } from '../molecules/search-bar/search-bar';
import { StatCard } from '../molecules/stat-card/stat-card';
import { Tabs } from '../molecules/tabs/tabs';
import { UserCard } from '../molecules/user-card/user-card';
import { ContactForm } from '../organisms/contact-form/contact-form';
import { DataTable } from '../organisms/data-table/data-table';
import { FilterBar } from '../organisms/filter-bar/filter-bar';
import { FooterComponent } from '../organisms/footer-component/footer-component';
import { LoginForm } from '../organisms/login-form/login-form';
import { NavBar } from '../organisms/nav-bar/nav-bar';
import { AthletesPage } from '../pages/athletes-page/athletes-page';
import { LandingPage } from '../pages/landing-page/landing-page';
import { ShopPage } from '../pages/shop-page/shop-page';
import { EventsPage } from '../pages/events-page/events-page';
import { ClubsPage } from '../pages/clubs-page/clubs-page';
import { ContactPage } from '../pages/contact-page/contact-page';
import { AthleteDashboard } from '../pages/athlete-dashboard/athlete-dashboard';
import { CoachDashboard } from '../pages/coach-dashboard/coach-dashboard';
import { ManagerDashboard } from '../pages/manager-dashboard/manager-dashboard';
import { AdminDashboard } from '../pages/admin-dashboard/admin-dashboard';
import { Spinner } from '../atoms/spinner/spinner';
import { FormField } from '../molecules/form-field/form-field';

@Component({
  selector: 'app-playground',
  imports: [
    CommonModule,
    Button,
    InputField,
    Badge,
    Avatar,
    ProgressBar,
    Rating,
    PriceDisplay,
    Tooltip,
    Popover,
    Slider,
    Stepper,
    Tag,
    Spinner,
    FormField,
    SearchBar,
    ProductCard,
    UserCard,
    StatCard,
    NavItem,
    Tabs,
    Dropdown,
    Breadcrumb,
    Pagination,
    Toast,
    Modal,
    Drawer,
    NavBar,
    FooterComponent,
    FilterBar,
    DataTable,
    LoginForm,
    ContactForm,
    LandingPage,
    ShopPage,
    AthletesPage,
    EventsPage,
    ClubsPage,
    ContactPage,
    AthleteDashboard,
    CoachDashboard,
    ManagerDashboard,
    AdminDashboard
],
  templateUrl: './playground.html',
  styleUrl: './playground.scss',
})
export class Playground {
  // Mocks Externos
  products = PRODUCTS;
  athletes = ATHLETES;
  shopCategories = SHOP_CATEGORIES;
  managerKpis = MANAGER_KPIS;
  clubAthletes = CLUB_ATHLETES;
  athleteColumns = [
    { key: 'name', header: 'Nombre' },
    { key: 'category', header: 'Categoría' },
  ];

  // Signals para estados interactivos
  sliderValue = signal(50);
  steps = ['Registro', 'Perfil', 'Pago'];
  currentStep = signal(1);
  isModalOpen = signal(false);
  isDrawerOpen = signal(false);

  // Handlers para eventos
  onButtonClick() {
    console.log('Button clicked');
  }
  onSearch(value: string) {
    console.log('Search:', value);
  }
  onBuy(product: any) {
    console.log('Buy:', product);
  }
  onProfile(id: string) {
    console.log('Profile:', id);
  }
  onTabChange(index: number) {
    console.log('Tab changed:', index);
  }
  onSelect(item: any) {
    console.log('Selected:', item);
  }
  onPageChange(page: number) {
    console.log('Page:', page);
  }
  onModalClose() {
    this.isModalOpen.set(false);
  }
  onDrawerClose() {
    this.isDrawerOpen.set(false);
  }
  onCategoryChange(id: string) {
    console.log('Category:', id);
  }
  onRowAction(row: any) {
    console.log('Row:', row);
  }
  onSliderChange(value: number) {
    this.sliderValue.set(value);
  }
}
